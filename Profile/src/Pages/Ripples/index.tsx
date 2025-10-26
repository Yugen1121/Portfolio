import {gsap} from "gsap";
import { DyClass } from "../../Helper/DyClass";
import React, { useRef, useState, useEffect, useCallback } from "react";
import "../../App.css";

function Ripples(){
    // gradiently changes the color o font
    let ref = useRef(null);
    let ref2 = useRef(null)
    useEffect(()=>{
        gsap.to(ref.current, {
            backgroundPosition:"-100% 200%",    
            duration: 1,
            ease: "linear",
            repeat: -1
        })
    }, [])
    // State to control automatic rain generation
    const [isRaining, setIsRaining] = useState(true);
    
    // Ref to access the canvas DOM element
    const canvasRef = useRef<HTMLCanvasElement>(null);
    
    // Ref to store active ripples (persists across renders without causing re-renders)
    const ripplesRef = useRef<Array<{ x: number; y: number; start: number }>>([]);
    
    // Ref to store the rain timeout ID for cleanup
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    // Ref to check if the window is rezied 
    const resize = useRef<boolean>(false);

    // ref to make sure when there is changes in the size of window the cell size is equal
    const MainCellWidth = useRef<number>(0);

    // Physics constants for wave simulation
    const size = 80 ;           // Grid size 
    const v = 5.0;             // Wave propagation velocity (cells per second)
    const T = 1.8;             // Wave period (seconds per cycle)
    const amp = 0.45;          // Wave amplitude (maximum displacement)
    const tau = 2.8;           // Time decay constant (how fast waves fade over time)
    const distBeta = 0.25;     // Distance decay constant (how fast waves fade with distance)

    /**
     * Adds a raindrop at a random position on the grid
     * Memoized to prevent recreation on every render
     */
    const addRaindrop = useCallback(() => {
        const x = Math.random() * size;
        const y = Math.random() * size;
        ripplesRef.current.push({ x, y, start: Date.now() });
        
        // Limit to 20 ripples to maintain performance
        if (ripplesRef.current.length > 40) ripplesRef.current.shift();
    }, [size]);


    /**
     * Effect: Manages automatic rain generation
     * Creates raindrops at random intervals when isRaining is true
     */
    useEffect(() => {
        // Stop rain if disabled
        if (!isRaining) {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
        return;
        }

        // Recursive function to create rain at random intervals
        const rainLoop = () => {
        addRaindrop();
        
        // Random delay between 300-900ms for natural rain effect
        const delay = 100 + Math.random() * 200;
        timeoutRef.current = setTimeout(rainLoop, delay);
        };
        
        rainLoop();

        // Cleanup: stop rain when component unmounts or isRaining changes
        return () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [isRaining, addRaindrop]);

    /**
     * Effect: Main canvas animation loop
     * Handles canvas setup, rendering, and physics calculations
     */

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d")!;
        let animationId: number;

        /**
         * Resizes canvas to match display size with proper pixel density
         * Ensures crisp rendering on high-DPI displays
         */
        const resizeCanvas = () => {
        canvas.width = window.innerWidth * window.devicePixelRatio;
        canvas.height = window.innerHeight * window.devicePixelRatio;
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
        resize.current = !resize.current;
        };
        
        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        
        // Calculate cell dimensions based on canvas size
        let cellWidth = (Math.max(canvas.offsetHeight, canvas.offsetWidth)/size)
        let cellHeight = cellWidth

        


        /**
         * Main animation loop - runs every frame
         * Calculates wave physics and renders the grid
         */
        const animate = () => {
        const now = Date.now();
        
        // Clear the entire canvas for the new frame
        ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
        
        // Remove ripples older than 10 seconds (fully decayed)
        ripplesRef.current = ripplesRef.current.filter(
            (r) => (now - r.start) / 1000 < 10
        );

        // Draw grid lines (subtle white lines)
        ctx.strokeStyle = "rgba(225, 225, 225, 0.1)"; //helitrop color name
        ctx.lineWidth = 50;

        let maxi = Math.max(canvas.offsetHeight, canvas.offsetWidth)
        MainCellWidth.current = maxi/size

        
        // 
        for (let k = 0; k <= size; k++) {
            const posX = (k / size) * maxi;
            const posY = (k / size) * maxi;
            
            // Vertical line
            ctx.beginPath();
            ctx.moveTo(posX, 0);
            ctx.lineTo(posX, canvas.offsetHeight);
            ctx.stroke();
            
            // Horizontal line
            ctx.beginPath();
            ctx.moveTo(0, posY);
            ctx.lineTo(canvas.offsetWidth, posY);
            ctx.stroke();
        }

        // Use the smaller dimension for consistent square cells
        const gridSize = maxi
        const cellSize = gridSize / size;

        // Number of rows and cols that fit the screen
        const cols = Math.ceil(maxi / cellSize);
        const rows = Math.ceil(maxi / cellSize);
        
        // Render each grid cell with wave displacement
        let x = {}
        for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
            // Calculate cell center in pixel coordinates
            const cellCenterX = (j + 0.5) * cellWidth;
            const cellCenterY = (i + 0.5) * cellHeight;

            // Calculate total displacement from all active ripples
            let displacement = 0;
            
            for (const ripple of ripplesRef.current) {
                // Distance from ripple origin to current cell (in grid units)
                const dx = (j + 0.5) - ripple.x;
                const dy = (i + 0.5) - ripple.y;
                const dist = Math.hypot(dx, dy); // euclidin distance sqrt(x^2+y^2)
                
                // Local time: accounts for wave travel time (dist/v)
                const tLocal = (now - ripple.start) / 1000 - dist / v;
                
                // Only calculate if wave has reached this cell
                if (tLocal > 0) {
                // Wave equation: sin wave with period T
                const phase = (2 * Math.PI * tLocal) / T;
                const wave = Math.sin(phase);
                
                // Exponential decay over time
                const timeDamp = Math.exp(-tLocal / tau);
                
                // Exponential decay over distance
                const distDamp = Math.exp(-dist * distBeta);
                
                // Combine all factors for final displacement
                displacement += amp * wave * timeDamp * distDamp;
                }
            }

            // Convert displacement to scale factor (0.8 to 1.8 range)
            const scale = Math.max(0.8, Math.min(1.8, 1 + displacement));
            
            // Calculate scaled cell dimensions
            const halfSize = (cellWidth / 2) * scale;
            const sx = cellCenterX - halfSize;
            const sy = cellCenterY - halfSize;
            const sw = cellWidth * scale;
            const sh = cellHeight * scale;

            const gradient = ctx.createLinearGradient(
                cellCenterX - halfSize,
                cellCenterY - halfSize,
                cellCenterX + halfSize,
                cellCenterY + halfSize
            );
            gradient.addColorStop(0, "#022D36");
               
               
            
            ctx.fillStyle = gradient;
            ctx.fillRect(sx, sy, sw, sh);
            }
        }

        // Request next animation frame
        animationId = requestAnimationFrame(animate);
        };

        // Start the animation loop
        animate();

        // Cleanup: stop animation and remove event listener
        return () => {
        cancelAnimationFrame(animationId);
        window.removeEventListener("resize", resizeCanvas);
        };
    }, [resize.current]);

    /**
     * Effect: Keyboard controls
     * Spacebar toggles rain on/off
     */
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
        if (e.code === "Space") setIsRaining((r) => !r);
        };
        
        window.addEventListener("keydown", handleKey);
        
        // Cleanup: remove event listener
        return () => window.removeEventListener("keydown", handleKey);
    }, []);

    


    return <>
        <div ref={ref} className="relative min-h-[100vh] h-[100%] w-[100%] min-w-[100vw] bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-950  p-6 color1">
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0  h-screen cursor-crosshair  z-0"
            role="img"
        
        />  
        </div>
        
    </>

}

export default Ripples;
