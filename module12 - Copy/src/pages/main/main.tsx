import { getDocs, collection } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useState, useEffect } from "react";
import { Post } from "./post";

export interface Post {
  id: string;
  userId: string;
  description: string;
  title: string;
  username: string;
}

export let Main = () => {
  let [postsList, setPostsList] = useState<Post[] | null>(null);
  let postsRef = collection(db, "posts");

  let getPosts = async () => {
    let data = await getDocs(postsRef);
    setPostsList(
      data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as Post[]
    );
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="post">
      {postsList?.map((post) => (
        <Post post={post} />
      ))}
    </div>
  );
};
