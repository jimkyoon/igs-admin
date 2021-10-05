import { FormControl, Input, InputLabel } from "@mui/material";
import React from "react";

interface TextProps {
  fieldName: string;
  labelName: string;
  value: string;
}

const Text: React.FC<TextProps> = ({ labelName, fieldName, value }) => {
  return (
    <FormControl
      key={labelName}
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
        name={fieldName[0]}
        // onChange={(e) =>
        //   setFormData(() => ({
        //     ...formData,
        //     [fieldName[0]]: e.target.value,
        //   }))
        // }
        type="text"
        placeholder={labelName}
        value={value}
        sx={{ width: "45%" }}
      />
    </FormControl>
  );
};

export default Text;
