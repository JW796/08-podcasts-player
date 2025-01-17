import { useEffect, useState } from "react";
import {jwtDecode} from "jwt-decode";

function App() {
  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const handleCallBack = (res) => {
    let user = jwtDecode(res.credential);
    setUser(user);
    setLoggedIn(true);
  }

  const handleLogOut = () => {
    setLoggedIn(false);
    setUser({});
  };

  useEffect (() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "875796848013-7hfgpnjsnvuha9geds6t5m86nsmqmdm3.apps.googleusercontent.com",
      callback: handleCallBack,
    });
    google.accounts.id.renderButton(
      document.getElementById("SignIn"),
      {theme: "outline",size: "large"}
    )
  }, [])
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-xl mt-5 py-2 text-center">08 - Podcasts Player</h1>
      {loggedIn ? (
        <>
        <button
        className="border py-1 px-3 rounded-full my-2"
        onClick={handleLogOut}
        >
          Log Out
        </button>
        <h3>Hi, {user.name}</h3>
        </>
    ):(
    <>
      <div id="SignIn"></div>
    </>
    )}
    </div>
  );
}

/** 
 * 
 Client ID: 875796848013-7hfgpnjsnvuha9geds6t5m86nsmqmdm3.apps.googleusercontent.com
 * 
 */

export default App;
