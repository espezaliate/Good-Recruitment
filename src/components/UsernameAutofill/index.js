import React, { useEffect } from "react";
import { useDispatch, connect } from "react-redux";
import {
  loadingUsernames,
  usernamesLoaded,
  getUsernameList,
} from "../../store/usernames";

const UsernameAutofill = ({
  isLoading,
  loadingUsernames,
  usernamesLoaded,
  getUsernameList,
  usernames,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsernameList());
    // console.log(usernames);
  }, []);

  return (
    <>
      {isLoading && <div>loading</div>}
      <form autoComplete="off">
        <div>
          <input
            id="myInput"
            type="text"
            name="myCountry"
            placeholder="Country"
          />
        </div>
        <input type="submit" />
      </form>
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
