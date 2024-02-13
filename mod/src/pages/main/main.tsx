//getDocs is use to get documents on firebase
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../Config/firebase";
import { useState, useEffect } from "react";
import { Post } from "./post";

//this used to define&format the data on the firebase
export interface PostStructure {
  id: string;
  userId: string;
  description: string;
  title: string;
  username: string;
}

export const Main = () => {
  const [postsList, setPostsList] = useState<PostStructure[] | null>(null);
  const postsRef = collection(db, "posts");

  //getDocs(postsRef) gets the data from the postsRef(firebase)
  //data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) is used to get a specific data only
  const getPosts = async () => {
    const data = await getDocs(postsRef);
    setPostsList(
      //as Post[] is used to know whats the format
      data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as PostStructure[]
    );
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    //this loop the data that we get in the firestore
    <div className="post">
      {postsList?.map((post) => (
        //I cant understand this clearly
        <Post post={post} />
      ))}
    </div>
  );
};
