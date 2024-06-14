import { Link } from 'react-router-dom';
import { FormControl, Select, InputLabel, MenuItem } from "@mui/material";


const CategoryDropdown = ({ category, setCategory, categories }) => {

  const handleChange = (e) => {
    setCategory(e.target.value);
  };

  return (
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
        value={category}
        onChange={handleChange}
        label="Category"
        sx={{
          color: "white",
          backgroundColor: "#1A1A1A",
          borderColor: "aqua",
          borderStyle: "solid",
          borderWidth: "1px",
          borderRadius: "10px",
          height: "40px",
          "&:hover, &.Mui-focusVisible": {
            borderColor: "#535bf2",
          },
        }}
      >
        <MenuItem value="">
          <em>Search by category</em>
        </MenuItem>
        {categories.map((cat) => {
          return (
            <MenuItem key={cat.category_name} value={cat.category_name}>
              <Link to = {`/${cat.category_name}`}>
              {cat.category_name}</Link>
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default CategoryDropdown;
