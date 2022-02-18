import React from "react";

export const SuggestionList = ({ search, usernames }) => {
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
                  item.toLowerCase().includes(search)
              )
              .map((item) => (
                <li type="none" key={item.length}>
                  {item}
                </li>
              ))
          : ""}
      </ul>
    </div>
  );
};
