import React from "react";
import { useState } from "react";
import classNames from "./MyPosts.module.sass";
import Post from "./Post/Post";
import { useForm } from 'react-hook-form'


const MyPostsForm = (props) => {

  const {
    register,
    formState: {
      errors,
      isValid
    },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'all'
  })

  const onSubmit = (data) => {
    console.log(JSON.stringify(data))
    props.addPost(data.post)
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classNames.form}>
      <textarea
        className={classNames.form__textarea}
        placeholder="your news..."
        {...register('post', {
          required: true,
          minLength: {
            value: 1
          }
        })}
      >
      </textarea>
      <button type='submit' disabled={!isValid} className={classNames.form__btn}>
        Send
      </button>
    </form>
  )
}

class MyPosts extends React.Component {


  render() {

    const postsElements = this.props.posts.map((p) => (
      <Post key={p.id} message={p.message} icon={p.avatar} numLikes={p.likes} />
    ));

    return (
      <div className={classNames.post} >
        <h3 className={classNames.post__title}>My posts</h3>
        <MyPostsForm addPost={this.props.addPost} />
        <div className={classNames.inner}>{postsElements}</div>
      </div>
    );
  }


};

export default MyPosts;
