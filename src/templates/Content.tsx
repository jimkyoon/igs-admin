import { Box, Button } from "@mui/material";
import React from "react";
import FileInput from "../components/content/FileInput";
import Text from "../components/content/Text";
import TextArea from "../components/content/TextArea";
import { formFields, formState } from "../utils/formInfo";
import { Page } from "./MainSection";

interface ContentProps {
  page: Page;
  post: any;
  setPostId: (postId: any) => void;
}

const Content: React.FC<ContentProps> = ({ page, post }) => {
  // @ts-ignore
  const [formData, setFormData] = React.useState(formState[page]);

  React.useEffect(() => {
    // @ts-ignore
    setFormData(post ?? formState[page]);
  }, [page, post]);

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

  const fields = (whichPage: any) => {
    // @ts-ignore
    const fieldsArrayFromPage = formFields[whichPage];
    return fieldsArrayFromPage.map((field: any) => {
      const fieldName = Object.keys(field);
      const fieldType = Object.values(field);
      const labelName =
        fieldName[0][0].toUpperCase() + fieldName[0].substring(1);

      if (fieldType[0] === "text") {
        return (
          <Text field={field} fieldName={fieldName} labelName={labelName} />
        );
      }
      if (fieldType[0] === "file") {
        return (
          <FileInput
            field={field}
            fieldName={fieldName}
            labelName={labelName}
          />
        );
      }
      if (fieldType[0] === "textarea") {
        return (
          <TextArea field={field} fieldName={fieldName} labelName={labelName} />
        );
      }

      if (fieldType[0] === "array") {
        const fieldArray = formData[fieldName[0]];
        console.log("fieldArray", fieldArray);
        let fileList;
        if (Array.isArray(fieldArray)) {
          fileList = fieldArray.map((a, index) => `[${index + 1}] ${a.name ? a.name : a}, `);
          return (
            <label>
              {labelName}
              {fieldArray.length === 0 ? null : fileList }
              <FileInput
                key={field.id + Object.keys(field)}
                // name={fieldName[0]}
                onChange={(e) => {
                  setFormData(() => {
                    return(
                      {...formData,
                      [fieldName[0]]: [...fieldArray, e.target.files[0]],
                      }
                    );
                  });
                  e.target.value = null;
                  return;
                }}
                type="file"
              />
            </label>
          );
        } else return null;
      }
    });
  };

  const fieldsList = fields(page);
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
          data-postid={post !== null ? post.id : ""}
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
