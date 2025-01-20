import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const Header = ({ loggedIn, setLoggedIn}) => {
  const [user, setUser] = useContext(UserContext);

  const handleLogOut = () => {
    setLoggedIn(false);
    setUser({});
  };

  return (
    <div>
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
            <h3>Hi, {user.given_name}</h3>
          </>
        ) : (
          <>
            <div id="SignIn"></div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
