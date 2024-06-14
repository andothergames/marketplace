import { useEffect, useState } from "react";
import { postItem } from "../api";
import TextField from "@mui/material/TextField";
import { FormControl, Select, InputLabel, MenuItem } from "@mui/material";

const ListItem = ({ category, categories }) => {
  //FORM STATES
  const [itemName, setItemName] = useState("");
  const [itemImage, setItemImage] = useState("");
  const [itemPrice, setItemPrice] = useState("0");
  const [itemDescription, setItemDescription] = useState("");
  const [itemCategory, setItemCategory] = useState("Household");

  //FORM STYLING
  const formStyling = {
    backgroundColor: "white",
    borderColor: "aqua",
    borderStyle: "solid",
    borderWidth: "1px",
    borderRadius: "10px",
    width: "200px",
  };

  const descriptionStyling = { ...formStyling };
  descriptionStyling.width = "400px";

  //API POST OBJECT FOR EDITING
  

  //HANDLERS
  const handleSubmit = (e) => {
      e.preventDefault();
      const postBody = {
        item_name: itemName,
        img_url: itemImage,
        price: itemPrice,
        description: itemDescription,
        category_name: itemCategory,
      }
      postItem(postBody)
  };

  const handleNameInput = (e) => {
    e.preventDefault();
    setItemName(e.target.value);
  };

  const handlePriceInput = (e) => {
    e.preventDefault();
    setItemPrice(e.target.value);
  };

  const handleImageInput = (e) => {
    e.preventDefault();
    setItemImage(e.target.value);
  };

  const handleDescriptionInput = (e) => {
    e.preventDefault();
    setItemDescription(e.target.value);
  };

  const handleDropdown = (e) => {
    setItemCategory(e.target.value);
  };

  //FORM USING MUI COMPONENTS

  return (
    //NAME
    <section className="form">
      <form onSubmit={handleSubmit}>
        <p>Item Name:</p>
        <TextField
          value={itemName}
          onChange={handleNameInput}
          required
          id="standard-required"
          label="Required Controlled"
          variant="standard"
          sx={formStyling}
        />

        {/* IMAGE */}
        <p>Item Image URL:</p>
        <TextField
          onChange={handleImageInput}
          value={itemImage}
          required
          id="standard-required"
          label="Required"
          variant="standard"
          sx={formStyling}
        />

        {/* PRICE */}
        <p>Price (in pence)</p>
        <TextField
          onChange={handlePriceInput}
          id="standard-number"
          label="Number, Required"
          type="number"
          value={itemPrice}
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
          sx={formStyling}
        />

        {/* DESCRIPTION */}
        <p>Description:</p>
        <TextField
          onChange={handleDescriptionInput}
          id="outlined-multiline-static"
          // label="Multiline"
          multiline
          rows={4}
          value={itemDescription}
          sx={descriptionStyling}
        />
        {/* CATEGORY DROP DOWN */}
        <p>Category:</p>
        <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel
            id="demo-simple-select-standard-label"
            sx={{ color: "white" }}
          >
            Category
          </InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={itemCategory}
            onChange={handleDropdown}
            label="Category"
            sx={{
              color: "white",
              backgroundColor: "#1A1A1A",
              borderColor: "aqua",
              borderStyle: "solid",
              borderWidth: "1px",
              borderRadius: "10px",
              "&:hover, &.Mui-focusVisible": {
                borderColor: "#535bf2",
              },
            }}
          >
            <MenuItem value="">
              <em>Select a category</em>
            </MenuItem>
            {categories.map((cat) => {
              return (
                <MenuItem key={cat.category_name} value={cat.category_name}>
                  {cat.category_name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>

        <br />
        <button>Submit</button>
      </form>
    </section>
  );
};

export default ListItem;
