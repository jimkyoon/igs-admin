import { Box, Button } from "@mui/material";
import React from "react";
import FileInput from "../components/content/FileInput";
import Text from "../components/content/Text";
import TextArea from "../components/content/TextArea";
import { formFields } from "../utils/formInfo";
import { getOneDoc } from "../utils/posts";
import { Page } from "./MainSection";

interface ContentProps {
  page: Page;
  postId: string;
}

const Content: React.FC<ContentProps> = ({ page, postId }) => {
  const [post, setPost] = React.useState<any>();

  React.useEffect(() => {
    async function getDocs() {
      try {
        const doc = await getOneDoc(page, postId);
        console.log(doc);
        setPost(doc);
      } catch (error) {
        console.error("Failed to get doc id", (error as any).message);
      }
    }
    getDocs();
  }, [page, postId]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // console.log("e.target", event.target.dataset.postid);
    // // check if form is filled
    // const formFilled = Object.values(formData).every((entry) => entry !== "");
    // if (!formFilled) {
    //   console.log("empty form");
    //   setAlert("Empty form, please fill in all fields");
    //   return;
    // }
    // if (post === null) {
    //   submitNewDoc(page, formData);
    //   setAlert("Post successful!");
    // } else {
    //   console.log(
    //     "updatePost args",
    //     page,
    //     event.target.dataset.postid,
    //     formData
    //   );
    //   updatePost(page, event.target.dataset.postid, formData);
    //   setAlert("Post updated!");
    // }
    // setPostId("");
    // setFormData(formState[page]);
    // console.log("you submit");
  };

  const fields = (page: Page) => {
    const fieldsArrayFromPage = formFields[page];

    return fieldsArrayFromPage.map((field: any) => {
      const fieldName = Object.keys(field);
      const fieldType = Object.values(field);
      const labelName =
        fieldName[0][0].toUpperCase() + fieldName[0].substring(1);

      if (fieldType[0] === "text") {
        return (
          <Text
            fieldName={fieldName[0]}
            labelName={labelName}
            value={post[fieldName[0]]}
          />
        );
      }
      if (fieldType[0] === "file") {
        return (
          <FileInput
            fieldName={fieldName[0]}
            labelName={labelName}
            value={post[fieldName[0]]}
          />
        );
      }
      if (fieldType[0] === "textarea") {
        return (
          <TextArea
            fieldName={fieldName[0]}
            labelName={labelName}
            value={post[fieldName[0]]}
          />
        );
      }
    });
  };

  const fieldsList = post ? fields(page) : null;
  const submitButtonText = post === null ? "Post" : "Update";

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        bgcolor: "background.paper",
        borderRadius: "4px",
        boxShadow: 1,
        margin: "auto",
        marginTop: "3vh",
        padding: "2rem",
        height: "500px",
      }}
    >
      <form style={{ width: "600px" }} onSubmit={handleSubmit}>
        {fieldsList}
        <Button
          color={submitButtonText === "Post" ? "primary" : "secondary"}
          // data-postid={post !== null ? post.id : ""}
          type="submit"
          variant="contained"
          sx={{ marginTop: "3rem", marginLeft: "0.5rem" }}
        >
          {submitButtonText}
        </Button>
      </form>
    </Box>
  );
};

export default Content;
