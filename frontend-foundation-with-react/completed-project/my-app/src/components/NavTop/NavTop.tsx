import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';

export default function NavTop() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Button href="docs" color='inherit'>Docs</Button>
          <Button href="swagger" color='inherit'>Swagger</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
