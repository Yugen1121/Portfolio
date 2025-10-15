import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}


const drawerWidth = 240;

function NavBar({Sections}: {Sections: Record<string, string>}) {

    const onClickNav = (id: string)=>{
        const section = document.getElementById(id);
        if (section){
            section.scrollIntoView({behavior: "smooth"})
        }
    }
    
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
        <Typography variant="h6" sx={{ my: 2 }}>
        Menue
        </Typography>
        <Divider />
        <List>
        {Object.keys(Sections).map((item) => (
            <ListItem key={item} disablePadding>
            <ListItemButton key={item} onClick={()=>onClickNav(item)} sx={{ textAlign: 'center' }}>
                <ListItemText primary={Sections[item]} />
            </ListItemButton>
            </ListItem>
        ))}
        </List>
    </Box>
    );

    const container = undefined;

    return (
    <div className='fixed z-1000'>
        <Box sx={{ display: 'flex',  }}>
        <CssBaseline />
        <AppBar component="nav">
            <Toolbar>
            
                <Typography
                    onClick={()=>onClickNav("Home")}
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1, display: {sm: 'block' } }}
                >
                    YL
                </Typography>
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    {Object.keys(Sections).map((item) => (
                    <Button key={item} onClick={()=>onClickNav(item)} sx={{ color: '#fff' }}>
                        {Sections[item]}
                    </Button>
                    ))}
                </Box>
                <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: 'none' } }}
                >
                Yugen
                </IconButton>
            </Toolbar>
        </AppBar>
        <nav>
            <Drawer
            anchor='right'
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
                keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
                display: { xs: 'block', sm: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            >
            {drawer}
            </Drawer>
        </nav>
        <Box component="main" sx={{ p: 3 }}>
            <Toolbar />
        </Box>
        </Box>
        </div>
    );
    }

    export default NavBar;