import { useEffect, useState, useRef } from "react";
import { UserContext } from "./contexts/UserContext";
import { jwtDecode } from "jwt-decode";
import Header from "./components/Header";

function App() {
  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const signInButton = useRef();

  const handleCallBack = (res) => {
    let user = jwtDecode(res.credential);
    setUser(user);
    setLoggedIn(true);
  };

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "875796848013-7hfgpnjsnvuha9geds6t5m86nsmqmdm3.apps.googleusercontent.com",
      callback: handleCallBack,
    });
    google.accounts.id.renderButton(signInButton.current, {
      theme: "outline",
      size: "large",
    });
  }, [loggedIn]);

  const rssFeed = "https://cdn.atp.fm/rss/public?q21vek4t";
  useEffect(() => {
    fetch(rssFeed)
      then(res => res.text()).
      then(str => {
        const parser = new window.DOMParser();
        const data = parser.parseFromString(str, "text/xml");
        const items = [];
        itemList.forEach((el) => {
          items.push({
            title: el.querySelector("title").innerHTML,
            pubDate: new Date(el.querySelector("pubDate").textContent),
            mp3: el.querySelector("enclosure").getAttribute("url"),
            link: el.querySelector("link").innerHTML,
          });
        });
      });
  });

  return (
    <UserContext.Provider value={[user, setUser]}>
      <Header
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
        signInButton={signInButton}
      />
    </UserContext.Provider>
  );
}

/** 
 * 
 Client ID: 875796848013-7hfgpnjsnvuha9geds6t5m86nsmqmdm3.apps.googleusercontent.com
 * 
 */

export default App;
