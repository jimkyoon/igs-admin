import * as React from "react";

import TopBar from "./topBar";
import LeftSide from "./leftSide";
import RightSide from "./rightSide";

import { getAllDocs } from "../utils/posts";

const pages = ["articles", "greetings", "sounds", "stories"];

const MainSection = ({ setAlert }) => {
  const [page, setPage] = React.useState(pages[0]);
  const [list, setList] = React.useState([]);
  // determine which form to show on RightSide
  const [postId, setPostId] = React.useState("");

  React.useEffect(() => {
    async function getDocs() {
      try {
        const docList = await getAllDocs(page);
        // change list to match page, also reset what shows on right form
        setList(docList);
        setPostId("");
      } catch (error) {
        console.error("Failed to get all docs", error.message);
      }
    }
    getDocs();
  }, [page]);

  const mainSectionStyling = {
    display: "flex",
    width: "100%",
  };

  const findPostData = list[list.findIndex((i) => i.id === postId)];
  const postRightSideData = findPostData ? findPostData : null;

  const arrayOfList = Array.isArray(list) ? list : [];

  return (
    <div>
      <TopBar page={page} pages={pages} setPage={setPage} />
      <div style={mainSectionStyling}>
        <LeftSide list={arrayOfList} postId={postId} setPostId={setPostId} />
        <RightSide
          page={page}
          post={postRightSideData}
          setAlert={setAlert}
          setPostId={setPostId}
        />
      </div>
    </div>
  );
};

export default MainSection;
