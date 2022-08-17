import * as React from "react";
import TextareaAutosize from "@mui/material/TextareaAutosize";

export default function MaxHeightTextarea({ description, setDescription }) {
  return (
    <TextareaAutosize
      onChange={(e) => setDescription(e.target.value)}
      maxRows={15}
      aria-label="maximum height"
      placeholder="Maximum 4 rows"
      defaultValue={description}
      style={{ width: 400 }}
    />
  );
}
