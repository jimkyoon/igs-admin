import { FormControl, InputLabel, TextareaAutosize } from "@mui/material";
import React from "react";

interface TextAreaProps {
  fieldName: any;
  labelName: string;
  value: string;
}

const TextArea: React.FC<TextAreaProps> = ({ fieldName, labelName, value }) => {
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
        name={fieldName[0]}
        // onChange={(e) =>
        //   setFormData(() => ({
        //     ...formData,
        //     [fieldName[0]]: e.target.value,
        //   }))
        // }
        value={value}
        style={{ width: "270px" }}
      />
    </FormControl>
  );
};

export default TextArea;
