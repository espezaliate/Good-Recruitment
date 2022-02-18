import React from "react";

export const SuggestionList = ({
  setSearch,
  search,
  usernames,
  setSearchState,
}) => {
  const handleClick = (e) => {
    setSearch(e.target.innerText);
    setSearchState(false);
  };
  return (
    <div>
      <ul>
        {/* To enable autofill through any character delete first
          parameter of filter function */}
        {search
          ? usernames
              .filter(
                (item) =>
                  item.toLowerCase().charAt(0) ===
                    search.toLowerCase().charAt(0) &&
                  item.toLowerCase().includes(search.toLowerCase())
              )
              .map((item) => (
                // to do: create unique keys for li && give bold to letters
                //  where searchLetter === itemLetter
                <li key={item.length} onClick={handleClick}>
                  {item}
                </li>
              ))
          : ""}
      </ul>
    </div>
  );
};
