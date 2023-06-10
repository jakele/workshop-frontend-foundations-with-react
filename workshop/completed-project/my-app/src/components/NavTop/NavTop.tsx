import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";

export default function NavTop() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Button href="/" color="inherit">
            Home
          </Button>
          <Button href="page-one" color="inherit">
            Page One
          </Button>
          <Button href="page-two" color="inherit">
            Page Two
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
