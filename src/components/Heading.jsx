import React from "react";
import "./index.css"
import NotesIcon from '@mui/icons-material/Notes';

function Header() {
  return (
    <header>
      <h1 className="heading"><NotesIcon fontSize="large"/>Keeper</h1>
    </header>
  );
}

export default Header;
