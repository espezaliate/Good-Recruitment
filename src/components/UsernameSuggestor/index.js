import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectAllUsernames, fetchUsernames } from './././store/usernameSuggestions/suggestionsSlice.js'

export const UsernameSuggestor = () => {
  const dispatch = useDispatch()
  const usernames = useSelector(selectAllUsernames)

  const usernameStatus = useSelector(state => state.usernames.status)

  useEffect(() => {
    if (usernameStatus === 'idle') {
      dispatch(fetchUsernames())
    }
  }, [usernameStatus, dispatch])
  return <form autocomplete="off">
  <div>
    <input id="myInput" type="text" name="myCountry" placeholder="Country" />
  </div>
  <input type="submit" />
</form>
}