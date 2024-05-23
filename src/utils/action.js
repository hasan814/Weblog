"use server";

import { signIn, signOut } from "./auth";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { Post, User } from "@/models/models";
import { connectDB } from "./connectDB";
import { genSalt, hash } from "bcryptjs";

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

export const register = async (previusState, formData) => {
  const { username, email, password, img, passwordRepeat } =
    Object.fromEntries(formData);

  if (password !== passwordRepeat) return { error: "Password do not match" };
  try {
    await connectDB();
    const user = await User.findOne({ username });
    if (user) return { error: "Username already exists" };

    const salt = await genSalt(10);
    const hashedPassword = await hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
    });
    await newUser.save();
    console.log("Save to DB");
    return { success: true };
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Something went wrong!" },
      { status: 500 }
    );
  }
};

export const login = async (formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Something went wrong!" },
      { status: 500 }
    );
  }
};
