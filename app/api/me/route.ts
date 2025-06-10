import { verifyToken } from "@/lib/jwt";
import { connectDB } from "@/lib/mongo";
import { User } from "@/models/User";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";


connectDB();
export async function GET(req: Request) {
    try {
        const token = (await cookies()).get('token')?.value;
        if (!token) {
            return new Response(JSON.stringify({ error: 'Not authenticated' }), {
                status: 401,
                headers: { 'Content-Type': 'application/json' },
            });
        }
        const decoded = verifyToken(token) as { id: string } | null;

        const user = await User.findById(decoded?.id).select('-password -__v');

        if (!user) {
            return NextResponse.json({ error: 'User not found' }, { status: 404 });
        }
        return NextResponse.json({ user }, { status: 200 });

    } catch (error) {
        console.error('[ME API ERROR]', error);
        return NextResponse.json({ error: 'Server error' }, { status: 500 });
    }
    
}