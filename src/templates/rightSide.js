import * as React from "react";

import FileInput from "../components/fileInput";
import TextAreaInput from "../components/textareaInput";
import TextInput from "../components/textInput";
import SubmitButton from "../components/submitButton";

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

  React.useEffect(() => {
    setFormData(initialFormState(page, formState, post));
  }, [page, post]);

  console.log('formstate', formData);

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
          <label>
            {labelName}
            <TextInput
              key={field.id + Object.keys(field)}
              name={fieldName[0]}
              onChange={(e) =>
                setFormData(() => ({
                  ...formData,
                  [fieldName[0]]: e.target.value,
                }))
              }
              type="text"
              value={formData[fieldName[0]]}
            />
          </label>
        );
      }
      if (fieldType[0] === "file") {
        return (
          <label>
            {labelName}
            {formData[fieldName[0]] instanceof String ? formData[fieldName[0]] : null}
            <FileInput
              key={field.id + Object.keys(field)}
              name={fieldName[0]}
              onChange={(e) =>
                setFormData(() => ({
                  ...formData,
                  [fieldName[0]]: e.target.files[0],
                }))
              }
              type="file"
            />
          </label>
        );
      }
      if (fieldType[0] === "textarea") {
        return (
          <label>
            {labelName}
            <TextAreaInput
              key={field.id + Object.keys(field)}
              name={fieldName[0]}
              onChange={(e) =>
                setFormData(() => ({
                  ...formData,
                  [fieldName[0]]: e.target.value,
                }))
              }
              value={formData[fieldName[0]]}
            />
          </label>
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
                name={fieldName[0]}
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

  const fieldsList = fields(page, formFields, post);
  const submitButtonText = post === null ? "Post" : "Update";

  return (
    <>
      <form>
        {fieldsList}
        <SubmitButton
          data-postid={post !== null ? post.id : ""}
          onClick={handleSubmit}
          type="submit"
          value={submitButtonText}
        />
      </form>
    </>
  );
};

export default RightSide;
