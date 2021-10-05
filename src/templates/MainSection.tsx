import React from "react";
import { useLocation } from "react-router";
import { formFields } from "../utils/formInfo";
import { getAllDocs } from "../utils/posts";
import Content from "./Content";
import Sidebar from "./Sidebar";

export type Page = keyof typeof formFields;

const MainSection = ({}) => {
  const location = useLocation();
  const path = location.pathname.substring(1);
  const [list, setList] = React.useState<any[]>([]);
  const [postId, setPostId] = React.useState("");

  React.useEffect(() => {
    async function getDocs() {
      try {
        const docList = await getAllDocs(path);
        // change list to match page, also reset what shows on right form
        setList(docList);
        setPostId("");
      } catch (error) {
        console.error("Failed to get all docs", (error as any).message);
      }
    }
    getDocs();
  }, [path]);

  const mainSectionStyling = {
    display: "flex",
    width: "100%",
  };

  const arrayOfList = Array.isArray(list) ? list : [];

  return (
    <div style={mainSectionStyling}>
      <Sidebar list={arrayOfList} postId={postId} setPostId={setPostId} />
      <Content page={path as unknown as Page} postId={postId} />
    </div>
  );
};

export default MainSection;
