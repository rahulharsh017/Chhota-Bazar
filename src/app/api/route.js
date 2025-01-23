import { NextResponse } from 'next/server';
import connectDB from '@/config/connectdB';

export async function GET() {
    try {
        await connectDB();
        return NextResponse.json({ message: "Database connected successfully" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Database connection failed", error: error.message }, { status: 500 });
    }
}
