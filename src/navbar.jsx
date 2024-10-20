import { AppBar, Box, Toolbar, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar 
        position="static" 
        sx={{ 
          backgroundImage: 'linear-gradient(to top,  #fbc2eb 0%, #a18cd1 100%)', // Gradient background
          boxShadow: 'none', // Remove shadow
          borderBottom: '2px solid #004ba0' // Custom bottom border
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}> 
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography 
            variant="h6" 
            component="div" 
            sx={{ 
              flexGrow: 1, 
              fontFamily: 'Arial, sans-serif', 
              fontWeight: 'bold' // Customize font
            }}
          >
            Todo React App
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
