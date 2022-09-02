import { Drawer, Box, Toolbar, Typography, Divider, List } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { SideBarItems } from "./SideBarItems";

export const SideBar = ({ drawerWidth = 240 }) => {
  const { displayName } = useSelector((state) => state.auth);
  const { notes } = useSelector((state) => state.task);

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant="permanent"
        open
        sx={{
          display: { sm: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            {displayName}
          </Typography>
        </Toolbar>
        <Divider />

        <List>
          {notes.map((task) => (
            <SideBarItems key={task.id} {...task} />
          ))}
        </List>
      </Drawer>
    </Box>
  );
};
