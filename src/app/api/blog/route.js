import { NextResponse } from "next/server";
import { connectDB } from "@/utils/connectDB";
import { Post } from "@/models/models";

export const GET = async (request) => {
  try {
    await connectDB();
    const posts = await Post.find();
    return NextResponse.json(posts);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed to Fetch Data" },
      { status: 500 }
    );
  }
};
