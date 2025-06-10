import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { User } from "@/models/User";
import { signToken } from "@/lib/jwt";
import { connectDB } from "@/lib/mongo";

connectDB();

export async function POST(req: Request) {
  const { username, email, password, phone } = await req.json();

  const exists = await User.findOne({ email });
  if (exists) {
    return NextResponse.json(
      { error: "Email already in use" },
      { status: 400 }
    );
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({
    username,
    email,
    password: hashedPassword,
    phone,
  });

  const token = signToken({ id: newUser._id, username, email });

  const res = NextResponse.json({ message: "User created" }, { status: 201 });
  res.cookies.set("token", token, {
    httpOnly: true,
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });

  return res;
}
