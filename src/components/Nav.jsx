import { Link } from 'react-router-dom';
import CategoryDropdown from "./CategoryDropdown";

const Nav = ( { category, setCategory, categories }) => {
  const handleResetCategory = (() => {
    setCategory('')
    })

  return (
    <nav>
        <Link to='/'><button onClick={handleResetCategory}>Home</button></Link>
        <Link to='/ListItem'><button onClick={handleResetCategory}>List Item</button></Link>
      <CategoryDropdown category={category} setCategory={setCategory} categories={categories}/>
    </nav>
  );
};

export default Nav;
