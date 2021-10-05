import { FormControl, Input, InputLabel } from "@mui/material";
import React from "react";
import { ContentProps } from "./ContentProps";

const FileInput: React.FC<ContentProps> = ({ field, fieldName, labelName }) => {
  return (
    <FormControl
      key={labelName}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "auto",
      }}
    >
      <InputLabel htmlFor={labelName} shrink={false} required>
        {labelName}
        {/* {formData[fieldName[0]] instanceof String
          ? formData[fieldName[0]]
          : null} */}
      </InputLabel>
      <Input
        key={field.id + Object.keys(field)}
        name={fieldName[0]}
        // onChange={(e) =>
        //   setFormData(() => ({
        //     ...formData,
        //     // @ts-ignore
        //     [fieldName[0]]: e.target.files[0],
        //   }))
        // }
        type="file"
        sx={{ width: "45%" }}
      />
    </FormControl>
  );
};

export default FileInput;
