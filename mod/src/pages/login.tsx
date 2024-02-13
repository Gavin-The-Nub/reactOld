import { auth, provider } from "../Config/firebase";
//signin with popup is telling how we gonna login
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result);
    navigate("/");
  };

  return (
    <div className="login">
      <p className="loginTx1">
        This website is just a firebase practice (test)
      </p>
      <p className="loginTx2"> You can only sign in with Google to continue</p>
      <button onClick={signInWithGoogle} className="login-with-google-btn">
        Sign In with Google
      </button>
    </div>
  );
};
