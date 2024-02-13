import { auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export let Login = () => {
  let navigate = useNavigate();

  let signIn = async () => {
    let result = await signInWithPopup(auth, provider);
    console.log(result);
    navigate("/");
  };
  return (
    <div>
      <button onClick={signIn}>sign in with Google</button>
    </div>
  );
};
