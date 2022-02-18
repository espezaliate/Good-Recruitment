import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  loadingUsernames,
  usernamesLoaded,
  getUsernameList,
} from "../../store/usernames";
import { SuggestionList } from "./SuggestionList";

const UsernameAutofill = ({ isLoading, getUsernameList, usernames }) => {
  const [search, setSearch] = useState("");

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    getUsernameList();
  }, []);

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <form autoComplete="off">
          <div>
            <input
              id="username"
              type="text"
              name="username"
              placeholder="Username"
              onChange={handleInput}
            />
          </div>
          <div>
            <SuggestionList usernames={usernames} search={search} />
          </div>
          <input type="submit" />
        </form>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.usernames.loading,
  usernames: state.usernames.usernames,
});

const mapDispatchToProps = {
  getUsernameList,
  loadingUsernames,
  usernamesLoaded,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsernameAutofill);
