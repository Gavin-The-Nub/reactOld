import { PostStructure } from "./main";
// query specifies what document we wanna get in the collection
// deleteDoc is used to delete a document from the collection
import {
  addDoc,
  collection,
  getDocs,
  query,
  where,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db, auth } from "../../Config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
//used where to navigate after function ends
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

//this props tell the post's format is PostStructure(same format on main.tsx)
interface Props {
  post: PostStructure;
}
interface Like {
  userId: string;
  likeId: string;
}

//"props: Props" this tell this gonna receive data from the Props(post)
export const Post = (props: Props) => {
  //this tells we only need post from props
  //I cant understand this clearly
  const { post } = props;

  const [likes, setLikes] = useState<Like[] | null>(null);

  const [user] = useAuthState(auth);

  const likesRef = collection(db, "likes");

  //1st query param tells what collection were gonna use
  //2nd query param "where" takes 3 things
  //1 = what field we gonna compare
  //2 = what operation we gonna do
  //3 = the data we comparing to

  //this tells us that were gonna only get the data where the "postId" is == to post.id
  const likesDoc = query(likesRef, where("postId", "==", post.id));

  const getLikes = async () => {
    const data = await getDocs(likesDoc);
    //I cant clearly understand this
    setLikes(
      data.docs.map((doc) => ({ userId: doc.data().userId, likeId: doc.id }))
    );
  };

  const addLike = async () => {
    try {
      const newDoc = await addDoc(likesRef, {
        userId: user?.uid,
        postId: post.id,
      });
      //I cant understand
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

  const removeLike = async () => {
    try {
      // I cant clearly understand this
      const likeToDeleteQuery = query(
        likesRef,
        where("postId", "==", post.id),
        where("userId", "==", user?.uid)
      );
      const likeToDeleteData = await getDocs(likeToDeleteQuery);
      const likeId = likeToDeleteData.docs[0].id;
      //doc is used to specify specific document u wanna remove
      //1st param is the database
      // 2nd is the collection in the db
      //3rdis the document id inside the collection
      const likeToDelete = doc(db, "likes", likeId);
      await deleteDoc(likeToDelete);
      // I cant clearly understand this
      if (user) {
        setLikes(
          (prev) => prev && prev.filter((like) => like.likeId !== likeId)
        );
      }
    } catch (err) {
      console.log(err);
    }
  };

  //find is used to loop tru array
  //if "like.userId === user?.uid"(the condition) is true then hasUserLiked is true
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
