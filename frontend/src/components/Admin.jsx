import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ToolTip from "@mui/material/Tooltip";
import RequestTable from "./RequestTable";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function Admin() {
  return (
    <div>
      <AppBar
        className="appbar"
        position="static"
        style={{
          backgroundColor: "rgb(238, 238, 238)",
          boxShadow: "none",
          borderRadius: "6px",
        }}
      >
        <Toolbar
          variant="dense"
          position="fixed"
          style={{ justifyContent: "space-between" }}
        >
          <Typography variant="h6" color="#2c2c2c" component="div">
            Name
          </Typography>
          <div>
            <Link
              to="/admin/requests"
              style={{ padding: "10px", color: "black" }}
            >
              Requests
            </Link>
            <Link to="/admin/students" style={{ padding: "30px", color: "black" }}>
              Students
            </Link>
          </div>

          <Link to="/" style={{color: "#f13c3c"}}>Logout</Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Admin;
