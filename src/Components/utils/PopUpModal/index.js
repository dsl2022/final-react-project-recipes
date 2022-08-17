import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextareaAutosize from "../TextArea";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function AddNewRecipePopUp() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [title, setTitle] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = () => {};
  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4" component="h2">
            Add New Recipe
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Title
          </Typography>
          <TextField
            onChange={(e) => setTitle(e.target.value)}
            id="standard-basic"
            label="Standard"
            variant="standard"
          />
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Photo URL:
          </Typography>
          <TextField
            onChange={(e) => setPhotoUrl(e.target.value)}
            id="standard-basic"
            label="Standard"
            variant="standard"
          />
          <TextareaAutosize
            description={description}
            setDescription={setDescription}
          />
          <Button>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </Box>
      </Modal>
    </div>
  );
}
