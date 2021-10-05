import { Button, MenuItem } from "@mui/material";
import React from "react";

interface SidebarProps {
  list: any[];
  postId: any;
  setPostId: (postId: any) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ list, postId, setPostId }) => {
  const styling = {
    borderRight: "1px solid black",
    height: "100%",
    justifyContent: "space-evenly",
    overflow: "auto",
    padding: "20px",
    width: "300px",
  };

  const PostsList = list.map((li) => (
    <MenuItem
      divider={true}
      key={li.id}
      onClick={() => setPostId(li.id)}
      selected={li.id === postId}
      sx={{
        height: "100%",
        justifyContent: "space-evenly",
        overflow: "auto",
        padding: "20px",
        textAlign: "left",
        fontSize: "1.1rem",
      }}
    >
      {li.title}
    </MenuItem>
  ));

  return (
    <div style={styling}>
      <Button
        key="brandnewpost"
        onClick={() => setPostId("new")}
        variant="outlined"
        sx={{
          overflow: "auto",
          padding: "20px",
          textAlign: "left",
          fontWeight: "bold",
          borderWidth: "2px",
          fontSize: "1rem",
          margin: "0 auto",
          width: "100%",
        }}
      >
        + New Post
      </Button>
      {list.length !== 0 ? PostsList : null}
    </div>
  );
};

export default Sidebar;
