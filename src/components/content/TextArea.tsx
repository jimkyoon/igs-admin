import { FormControl, InputLabel, TextareaAutosize } from "@mui/material";
import React from "react";

interface TextAreaProps {
  field: any;
  fieldName: any;
  labelName: string;
}

const TextArea: React.FC<TextAreaProps> = ({ field, fieldName, labelName }) => {
  return (
    <FormControl
      key={labelName}
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
        // onChange={(e) =>
        //   setFormData(() => ({
        //     ...formData,
        //     [fieldName[0]]: e.target.value,
        //   }))
        // }
        // value={formData[fieldName[0]]}
        style={{ width: "270px" }}
      />
    </FormControl>
  );
};

export default TextArea;
