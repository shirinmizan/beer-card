import "./SearchBox.scss";
import React from "react";

const SearchBox = (props) => {
  const { searchTerm, handleInput } = props;

  return (
    <form className="search-box">

      <input
        type="text"
        value={searchTerm}
        onInput={handleInput}
        placeholder="Search"
        className="search-box__input"
      />
    </form>
  );
};

export default SearchBox;




// import "./SearchBox.scss";

// const SearchBox = (props) => {
//   const { label, searchTerm, handleInput } = props;

//   const capitalizedLabel = label[0].toUpperCase() + label.slice(1);

//   return (
//     <form className="search-box">
//       <label htmlFor={label} className="search-box__label">
//         {capitalizedLabel}
//       </label>
//       <input
//         type="text"
//         name={label}
//         value={searchTerm}
//         onInput={handleInput}
//         className="search-box__input"
//       />
//     </form>
//   );
// };

// export default SearchBox;