import PropTypes from "prop-types";
import { useState } from "react";
const Header = ({ onsearch }) => {
  const [textsearch, setTextsearch] = useState('');

  return (
    <div className="p-4 bg-black flex items-center justify-between">
      <div className="flex items-center space-x-4 gap-8">
        <h1 className="text-[30px] uppercase text-red-700 font-bold">Movie</h1>
        <nav className="flex items-center space-x-4 list-none">
          <li className="text-white">Home</li>
          <li className="text-white">About</li>
          <li className="text-white">Contact</li>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search"
          className="p-2 text-black rounded-[10px] outline-0"
          onChange={(e) => setTextsearch(e.target.value)}
          value={textsearch}
        />
        <button
          className="p-2 bg-red-700 text-white rounded-[10px]"
          onClick={() => onsearch(textsearch)}
        >
          Search
        </button>
      </div>
    </div>
  );
};

Header.propTypes = {
  onsearch: PropTypes.func.isRequired,
};

export default Header;