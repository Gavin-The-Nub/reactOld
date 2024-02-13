import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
//addDoc is used to add document in the firebase
//collection is used to specify what collection u wanna use in the firebase
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../../Config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
//used where to navigate after function ends
import { useNavigate } from "react-router-dom";

//this is used to tell whats the type of it
interface CreateFormData {
  title: string;
  description: string;
}

export const CreateForm = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const schema = yup.object().shape({
    title: yup.string().required("e ang title?"),
    description: yup.string().required("e ang description?"),
  });

  // formState: {errors} is used to tell whats the error
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  //1st argument tells the database were gonna use
  //2nd argument tells whats the collection were gonna use
  const postsRef = collection(db, "posts");

  //CreateFormData tells data whats it type
  //data is the output of the form when u submit it
  const onCreatePost = async (data: CreateFormData) => {
    //addDoc(1stParam) tells what collection we gonna put the data
    //and it shows we'll put it in postsRef "its the collection"

    //addDoc(2ndParam) tells what data were gonna put on the collection
    console.log(data);
    await addDoc(postsRef, {
      title: data.title,
      description: data.description,
      username: user?.displayName,
      userId: user?.uid,
    });
    navigate("/");
  };

  //{errors.title?.message} is used because of formState: { errors }
  return (
    <div className="form">
      <form className="createPostForm" onSubmit={handleSubmit(onCreatePost)}>
        <input
          className="titleBox box"
          placeholder="title"
          {...register("title")}
        ></input>
        <p style={{ color: "white" }}>{errors.title?.message}</p>
        <br />
        <textarea
          className="descBox box"
          placeholder="Description"
          {...register("description")}
        ></textarea>
        <p style={{ color: "white" }}>{errors.description?.message}</p>
        <input className="postBtn box" type="submit"></input>
      </form>
    </div>
  );
};
