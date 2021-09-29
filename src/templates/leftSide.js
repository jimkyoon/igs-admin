import * as React from "react";

import PostSelector from "../components/postSelctor";

const LeftSide = ({ list, postId, setPostId }) => {
  const styling = {
    borderRight: "1px solid black",
    height: "100%",
    justifyContent: "space-evenly",
    overflow: "auto",
    padding: "20px",
    width: "30%",
  };

  const PostsList = list.map((li) => (
    <PostSelector
      key={li.id}
      onClick={() => setPostId(li.id)}
      selected={li.id === postId}
    >
      {li.title}
    </PostSelector>
  ));

  return (
    <div style={styling}>
      <PostSelector
        key="brandnewpost"
        onClick={() => setPostId("new")}
        selected={postId === "new"}
      >
        + New Post
      </PostSelector>
      {list.length !== 0 ? PostsList : null}
    </div>
  );
};

export default LeftSide;
