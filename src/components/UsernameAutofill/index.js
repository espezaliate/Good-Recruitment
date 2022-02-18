import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  loadingUsernames,
  usernamesLoaded,
  getUsernameList,
} from "../../store/usernames";
import { SuggestionList } from "./SuggestionList";

const UsernameAutofill = ({
  isLoading,
  getUsernameList,
  usernames,
  isError,
}) => {
  const [search, setSearch] = useState("");
  const [searchState, setSearchState] = useState(false);

  const handleInput = (e) => {
    setSearchState(true);
    setSearch(e.target.value);
  };

  useEffect(() => {
    getUsernameList();
  }, []);

  return (
    <>
      {isLoading ? (
        <div>Loading ...</div>
      ) : isError ? (
        <div>Error whilst loading, please try again</div>
      ) : (
        <form autoComplete="off">
          <div>
            <input
              id="username"
              type="text"
              name="username"
              placeholder="Username"
              onChange={handleInput}
              value={search}
            />
          </div>
          {searchState && (
            <div>
              <SuggestionList
                usernames={usernames}
                search={search}
                setSearch={setSearch}
                setSearchState={setSearchState}
              />
            </div>
          )}
          <input type="submit" />
        </form>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.usernames.loading,
  usernames: state.usernames.usernames,
  isError: state.usernames.error.status,
});

const mapDispatchToProps = {
  getUsernameList,
  loadingUsernames,
  usernamesLoaded,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsernameAutofill);
