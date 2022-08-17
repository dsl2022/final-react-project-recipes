import React, { useState, useContext } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextareaAutosize from "../TextArea";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import { addRecipe } from "../../../features/recipeSlice";
import OpenPopUpContext from "../../../Context/OpenPopUpContext";

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
  const { openAdd, setOpenAdd } = useContext(OpenPopUpContext);
  const handleClose = () => setOpenAdd(false);
  const [title, setTitle] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(
      addRecipe({
        createdAt: new Date().toLocaleDateString(),
        title,
        photoUrl,
        description,
      })
    );
    handleClose();
  };
  return (
    <div>
      <Modal
        open={openAdd}
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
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </Box>
      </Modal>
    </div>
  );
}
