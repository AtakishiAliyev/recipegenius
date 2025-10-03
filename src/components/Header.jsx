import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="py-4 px-6 border-b-2 flex justify-between">
      <h1 className="font-bold">
        <Link to="/">RecipeGenius</Link>
      </h1>
      <ul className="flex items-center gap-4">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/saved-recipe">Recipes</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
