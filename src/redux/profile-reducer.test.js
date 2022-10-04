import profileReducer, { addPost, deletePost } from "./profile-reducer";
import React from "react";

let state = {
  posts: [
    { id: 1, message: "Hey everybody! I will win in this war", likes: 15 },
    { id: 2, message: "Hashiramaaaa! Where are you?!", likes: 23 },
    { id: 3, message: "I'm going to devour ten tail", likes: 49 },
    { id: 4, message: "I'll kill you, Tobirama", likes: 76 },
  ],
};

test("lenght of post should be incremented", () => {
  // 1. test data
  const action = addPost("how");

  // 2.action
  let newState = profileReducer(state, action);

  // 3. post added

  expect(newState.posts.length).toBe(5);
});

test("after deleting length of messages should be decrement", () => {
  // 1. test data
  const action = deletePost(1);
  // 2.action
  let newState = profileReducer(state, action);

  // 3. post added

  expect(newState.posts.length).toBe(3);
});
