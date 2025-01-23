import { NextResponse } from 'next/server';
import connectDB from '@/config/connectdB';
import Billing from '@/models/billing.model';

export async function GET() {
  await connectDB();

  try {
    const bills = await Billing.find({});
    return NextResponse.json(bills, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Error fetching bills', error: error.message }, { status: 500 });
  }
}

export async function POST(req) {
  await connectDB();

  try {
    const { items, totalAmount } = await req.json();
    const billingDetails = new Billing({
      items,
      totalAmount,
      date: new Date(),
    });
    await billingDetails.save();
    return NextResponse.json({ message: 'Billing details saved successfully' }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: 'Error saving billing details', error: error.message }, { status: 500 });
  }
}