import { Link } from "react-router-dom";
import { auth } from "../Config/firebase";
//useAuthState is used to get a object
import { useAuthState } from "react-firebase-hooks/auth";
//signOut is used to logout
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

//user is from object and it consist of many objects like uid, displayName, etc..
export const Navbar = () => {
  const [user] = useAuthState(auth);

  const navigate = useNavigate();

  const signUserOut = async () => {
    await signOut(auth);
    navigate("login");
  };

  //if user is true then show displayName,photoURL,signOut btn else dont
  return (
    <div className="nav">
      <div className="left"></div>
      <div className="mid">
        <Link to={"/"}>Home</Link>
        {!user ? (
          <Link to={"/login"}>Login</Link>
        ) : (
          <Link to={"/createpost"}>Create post</Link>
        )}
      </div>
      <div className="right">
        {user && (
          <div className="prof">
            <p>{user?.displayName}</p>
            <img className="profImg" src={user?.photoURL || ""}></img>
            <button onClick={signUserOut}>Log out</button>
          </div>
        )}
      </div>
    </div>
  );
};
