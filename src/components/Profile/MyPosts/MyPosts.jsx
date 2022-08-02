import React from "react";
import { useState } from "react";
import classNames from "./MyPosts.module.sass";
import Post from "./Post/Post";

const MyPosts = (props) => {
  const [value, setValue] = useState("");

  const postsElements = props.posts.map((p) => (
    <Post key={p.id} message={p.message} icon={p.avatar} numLikes={p.likes} />
  ));

  const addPost = () => {
    props.addPost();
    setValue("");
  };

  const onPostChange = (e) => {
    setValue(e.target.value);
    props.updateNewPostText(e.target.value);
  };

  return (
    <div className={classNames.post}>
      <h3 className={classNames.post__title}>My posts</h3>
      <div className={classNames.form}>
        <textarea
          onChange={onPostChange}
          value={value}
          className={classNames.form__textarea}
          placeholder="your news..."
        ></textarea>
        <button onClick={addPost} className={classNames.form__btn}>
          Send
        </button>
      </div>
      <div className={classNames.inner}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
