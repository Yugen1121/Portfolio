function CoordinatesFinder(x: number, y: number, dist: number){
    const main = [];
    let dx = x + dist;
    let dy = y;
    while (dx > x){
        main.push([dx, dy])
        dx --;
        dy ++;
    }

    while (dx > (x - dist)){
        main.push([dx, dy])
        dx --;
        dy --;
    }

    while (dx < x){
        main.push([dx, dy])
        dx ++;
        dy --;
    }

    while (dx <= (x + dist)){
        main.push([dx, dy])
        dx ++;
        dy ++;
    }

    return main
    
    
}  

export default CoordinatesFinder;