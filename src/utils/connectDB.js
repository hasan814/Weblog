import { NextResponse } from "next/server";
import { connect } from "mongoose";

const connection = {};

export const connectDB = async () => {
  try {
    if (connection.isConnected) {
      console.log("Using existing connection");
      return;
    }
    const db = await connect(process.env.MONGO_URI);
    connection.isConnected = db.connections[0].readyState;
    console.log("Connected to DB");
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed to connect to DB" },
      { status: 500 }
    );
  }
};
