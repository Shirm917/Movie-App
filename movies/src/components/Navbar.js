import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MovieIcon from "@mui/icons-material/Movie";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link className="link" to="/">
            <IconButton
              size="large"
              edge="start"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MovieIcon />
            </IconButton>
          </Link>
          <Link className="link" to="/">
            {" "}
            MovieSeriesInfo{" "}
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
