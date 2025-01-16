import { useEffect } from "react";

function App() {
  const handleCallBack = (res) => {
    console.log("Encoded Token" + res.credential)
  }

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
    <div id="SignIn"></div>
    </div>
  );
}

/** 
 * 
 Client ID: 875796848013-7hfgpnjsnvuha9geds6t5m86nsmqmdm3.apps.googleusercontent.com
 * 
 */

export default App;
