import { FormControl, Input, InputLabel } from "@mui/material";
import React from "react";

interface TextProps {
  field: any;
  fieldName: any;
  labelName: string;
}

const Text: React.FC<TextProps> = ({ labelName, field, fieldName }) => {
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
        key={field.id + Object.keys(field)}
        name={fieldName[0]}
        // onChange={(e) =>
        //   setFormData(() => ({
        //     ...formData,
        //     [fieldName[0]]: e.target.value,
        //   }))
        // }
        type="text"
        placeholder={labelName}
        // value={formData[fieldName[0]]}
        sx={{ width: "45%" }}
      />
    </FormControl>
  );
};

export default Text;
