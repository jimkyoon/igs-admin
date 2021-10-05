import * as React from "react";

import {
  Box,
  Button,
  FormControl,
  Input,
  InputLabel,
  TextareaAutosize,
} from "@mui/material";

import { formFields, formState } from "../utils/formInfo";
import { submitNewDoc, updatePost } from "../utils/posts";

const initialFormState = (page, stateBasedPage, currentPost) => {
  if (currentPost) {
    return currentPost;
  }
  return stateBasedPage[page];
};

const RightSide = ({ page, post, setAlert, setPostId }) => {
  const [formData, setFormData] = React.useState(formState[page]);
  console.log("rightside prop post", post);

  React.useEffect(() => {
    setFormData(initialFormState(page, formState, post));
  }, [page, post]);

  console.log("formstate", formData);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("e.target", e.target.dataset.postid);
    // check if form is filled
    const formFilled = Object.values(formData).every((entry) => entry !== "");
    if (!formFilled) {
      console.log("empty form");
      setAlert({
        isError: true,
        message: "Empty form, please fill in all fields",
      });
      return;
    }
    if (post === null) {
      submitNewDoc(page, formData);
      setAlert({
        isError: false,
        message: "Post successful!",
      });
    } else {
      console.log("updatePost args", page, e.target.dataset.postid, formData);
      updatePost(page, e.target.dataset.postid, formData);
      setAlert({
        isError: false,
        message: "Post updated!",
      });
    }
    setPostId("");
    setFormData(formState[page]);
    console.log("you submit");
  };

  const fields = (whichPage, fieldsBasedPage, currentPost) => {
    const fieldsArrayFromPage = fieldsBasedPage[whichPage];
    return fieldsArrayFromPage.map((field) => {
      const fieldName = Object.keys(field);
      const fieldType = Object.values(field);
      const labelName =
        fieldName[0][0].toUpperCase() + fieldName[0].substring(1);
      if (fieldType[0] === "text") {
        return (
          <FormControl
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: "auto",
            }}
          >
            <InputLabel htmlFor={labelName} shrink={false} required>
              {labelName}
            </InputLabel>
            <Input
              key={field.id + Object.keys(field)}
              name={fieldName[0]}
              onChange={(e) =>
                setFormData(() => ({
                  ...formData,
                  [fieldName[0]]: e.target.value,
                }))
              }
              type="text"
              placeholder={labelName}
              value={formData[fieldName[0]]}
              sx={{ width: "45%" }}
            />
          </FormControl>
        );
      }
      if (fieldType[0] === "file") {
        return (
          <FormControl
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              margin: "auto",
            }}
          >
            <InputLabel htmlFor={labelName} shrink={false} required>
              {labelName}
              {formData[fieldName[0]] instanceof String
                ? formData[fieldName[0]]
                : null}
            </InputLabel>
            <Input
              key={field.id + Object.keys(field)}
              name={fieldName[0]}
              onChange={(e) =>
                setFormData(() => ({
                  ...formData,
                  [fieldName[0]]: e.target.files[0],
                }))
              }
              type="file"
              sx={{ width: "45%" }}
            />
          </FormControl>
        );
      }
      if (fieldType[0] === "textarea") {
        return (
          <FormControl
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: "auto",
              marginTop: "1rem",
            }}
          >
            <InputLabel shrink={false} htmlFor={labelName} required>
              {labelName}
            </InputLabel>
            <TextareaAutosize
              aria-label="body"
              minRows={5}
              key={field.id + Object.keys(field)}
              name={fieldName[0]}
              onChange={(e) =>
                setFormData(() => ({
                  ...formData,
                  [fieldName[0]]: e.target.value,
                }))
              }
              type="textarea"
              value={formData[fieldName[0]]}
              style={{ width: "270px" }}
            />
          </FormControl>
        );
      }
    });
  };

  const fieldsList = fields(page, formFields, post);
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
        marginTop: "10vh",
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
        >
          {submitButtonText}
        </Button>
      </form>
    </Box>
  );
};

export default RightSide;
