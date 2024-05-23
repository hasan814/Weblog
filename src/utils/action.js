"use server";

import { signIn, signOut } from "./auth";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { Post, User } from "@/models/models";
import { connectDB } from "./connectDB";

export const addPost = async (formData) => {
  const { title, desc, slug, userId } = Object.fromEntries(formData);

  try {
    await connectDB();
    const newPost = new Post({
      title,
      desc,
      slug,
      userId,
    });
    await newPost.save();
    console.log("save to DB");
    revalidatePath("/blog");
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
};

export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    await connectDB();
    await Post.findByIdAndDelete(id);
    console.log("Delete from DB");
    revalidatePath("/blog");
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
};

export const handleGithubLogin = async () => {
  await signIn("github");
};

export const handleLogOut = async () => {
  await signOut();
};

export const register = async (formData) => {
  const { username, email, password, img, passwordRepeat } =
    Object.fromEntries(formData);

  if (password !== passwordRepeat) return "Password do not match";
  try {
    await connectDB();
    const user = await User.findOne({ username });
    if (user) return "Username already exists";

    const newUser = new User({
      username,
      email,
      password,
      img,
    });
    await newUser.save();
    console.log("Save to DB");
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Something went wrong!" },
      { status: 500 }
    );
  }
};
