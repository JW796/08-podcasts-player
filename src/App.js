import { useEffect, useState, useRef } from "react";
import { UserContext } from "./contexts/UserContext";
import { jwtDecode } from "jwt-decode";
import Header from "./components/Header";
import Episode from "./components/Episode";

function App() {
  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [data, setData] = useState([]);
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
      .then((res) => res.text())
      .then((str) => {
        const parser = new window.DOMParser();
        const data = parser.parseFromString(str, "text/xml");
        const itemList = data.querySelectorAll("item");
        const items = [];
        itemList.forEach((el) => {
          items.push({
            title: el.querySelector("title").innerHTML,
            pubDate: new Date(
              el.querySelector("pubDate").textContent
            ).toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
            }),
            mp3: el.querySelector("enclosure").getAttribute("url"),
            link: el.querySelector("link").innerHTML,
          });
        });
        setData(items);
      });
  }, [rssFeed]);

  return (
    <UserContext.Provider value={[user, setUser]}>
      <Header
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
        signInButton={signInButton}
      />
      {loggedIn ? (
        <div className="pl=4 py-4 flex flex-col items-center">
          <h2 className="text-2xl font-medium text-center">
            Accidental Tech Podcast
          </h2>
          {data.map((ep, i) => (
            <Episode
              key={i}
              title={ep.title}
              pubDate={ep.pubDate}
              link={ep.link}
              mp3={ep.mp3}
            />
          ))}
        </div>
      ) : (
        <h3 className="text-center text-2xl mx-auto px-5 pt-6">
          Login to Continue
        </h3>
      )}
    </UserContext.Provider>
  );
}

/** 
 * 
 Client ID: 875796848013-7hfgpnjsnvuha9geds6t5m86nsmqmdm3.apps.googleusercontent.com
 * 
 */

export default App;
