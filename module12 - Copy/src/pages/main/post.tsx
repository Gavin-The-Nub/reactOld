import {
  addDoc,
  getDocs,
  deleteDoc,
  collection,
  query,
  where,
  doc,
} from "firebase/firestore";
//query helps you get what specific value you want to get in your firebase collection
import { auth, db } from "../../config/firebase";
import { Post as PostStructure } from "./main";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";

interface Props {
  post: PostStructure;
}
interface Like {
  userId: string;
  likeId: string;
}

export let Post = (props: Props) => {
  let { post } = props;

  const [likes, setLikes] = useState<Like[] | null>(null);

  const [user] = useAuthState(auth);

  let likesRef = collection(db, "likes");

  let likesDoc = query(likesRef, where("postId", "==", post.id));

  let getLikes = async () => {
    let data = await getDocs(likesDoc);
    setLikes(
      data.docs.map((doc) => ({ userId: doc.data().userId, likeId: doc.id }))
    );
  };

  let addLike = async () => {
    try {
      const newDoc = await addDoc(likesRef, {
        userId: user?.uid,
        postId: post.id,
      });
      if (user) {
        setLikes((prev) =>
          prev
            ? [...prev, { userId: user?.uid, likeId: newDoc.id }]
            : [{ userId: user?.uid, likeId: newDoc.id }]
        );
      }
    } catch (err) {
      console.log(err);
    }
  };

  let removeLike = async () => {
    try {
      const likeToDeleteQuery = query(
        likesRef,
        where("postId", "==", post.id),
        where("userId", "==", user?.uid)
      );
      const likeToDeleteData = await getDocs(likeToDeleteQuery);
      const likeId = likeToDeleteData.docs[0].id;
      const likeToDelete = doc(db, "likes", likeId);
      await deleteDoc(likeToDelete);

      if (user) {
        setLikes(
          (prev) => prev && prev.filter((like) => like.likeId !== likeId)
        );
      }
    } catch (err) {
      console.log(err);
    }
  };

  let hasUserLiked = likes?.find((like) => like.userId === user?.uid);

  useEffect(() => {
    getLikes();
  }, []);
  return (
    <div className="posts">
      <div className="title">
        <h1>{post.title}</h1>
      </div>
      <div className="body">
        <p>{post.description}</p>
      </div>
      <div className="footer">
        <div>
          <p className="user">@ {post.username}</p>
        </div>
        {likes && <p className="likes">Likes: {likes?.length}</p>}
        <button className="btn" onClick={!hasUserLiked ? addLike : removeLike}>
          {hasUserLiked ? <>&#128078;</> : <>&#128077;</>}
        </button>
      </div>
    </div>
  );
};
