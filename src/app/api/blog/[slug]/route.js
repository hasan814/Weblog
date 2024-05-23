import { NextResponse } from "next/server";
import { connectDB } from "@/utils/connectDB";
import { Post } from "@/models/models";

export const GET = async (request, { params }) => {
  const { slug } = params;
  try {
    await connectDB();
    const post = await Post.findOne({ slug });
    return NextResponse.json(post);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed to Fetch Data" },
      { status: 500 }
    );
  }
};

export const DELETE = async (request, { params }) => {
  const { slug } = params;
  try {
    await connectDB();
    await Post.deleteOne({ slug });
    return NextResponse.json("Post Deleted");
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed to Delete Data" },
      { status: 500 }
    );
  }
};
