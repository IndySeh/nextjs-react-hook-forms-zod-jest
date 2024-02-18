import { NextRequest, NextResponse } from "next/server";
import { UserSchema } from "@/lib/types";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const result = UserSchema.parse(body);

    if (result) {
      return NextResponse.json({
        message: "Data post Successfully",
        user: result,
      });
    }
  } catch (error) {
    return NextResponse.json({ message: error });
  }
}
