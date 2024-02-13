import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../config/firebase";
import { auth } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import { useNavigate } from "react-router-dom";

interface CreateFormData {
  title: string;
  description: string;
}

export let CreateForm = () => {
  let [user] = useAuthState(auth);

  let navigate = useNavigate();

  let schema = yup.object().shape({
    title: yup.string().required("e ang title?"),
    description: yup.string().required("e ang description?"),
  });

  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  let postsRef = collection(db, "posts");

  let onCreatePost = async (data: CreateFormData) => {
    await addDoc(postsRef, {
      title: data.title,
      description: data.description,
      username: user?.displayName,
      userId: user?.uid,
    });
    navigate("/");
  };

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
