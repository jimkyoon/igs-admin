import React from "react";
import BackgroundDiv from "../components/backgroundDiv";
import { useAlertContext } from "../utils/alertContext";
import { getAllDocs } from "../utils/posts";
import Content from "./content";
import Navbar from "./Navbar";
import Sidebar from "./sidebar";

const pages = ["articles", "greetings", "sounds", "stories"];

const MainSection = ({}) => {
  const { setAlert } = useAlertContext();
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
    <BackgroundDiv>
      <Navbar page={page} pages={pages} setPage={setPage} />
      <div style={mainSectionStyling}>
        <Sidebar list={arrayOfList} postId={postId} setPostId={setPostId} />
        <Content
          page={page}
          post={postRightSideData}
          setAlert={setAlert}
          setPostId={setPostId}
        />
      </div>
    </BackgroundDiv>
  );
};

export default MainSection;
