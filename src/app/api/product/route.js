import { NextResponse } from 'next/server';
import connectDB from '@/config/connectdB';
import Product from '@/models/product.model';

export async function GET() {
  await connectDB();

  try {
    const products = await Product.find({});
    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Error fetching products', error: error.message }, { status: 500 });
  }
}

export async function POST(req) {
  await connectDB();

  try {
    const { name, category, price, description, imageUrl } = await req.json();
    const newProduct = new Product({ name, category, price, description, imageUrl });
    await newProduct.save();
    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: 'Error adding product', error: error.message }, { status: 500 });
  }
}

export async function DELETE(req) {
  await connectDB();

  try {
    const { id } = await req.json();
    await Product.findByIdAndDelete(id);
    return NextResponse.json({ message: 'Product deleted successfully' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Error deleting product', error: error.message }, { status: 500 });
  }
}

export async function PATCH(req) {
  await connectDB();

  try {
    const { _id, ...updateFields } = await req.json();
    const updatedProduct = await Product.findByIdAndUpdate(
      _id,
      { $set: updateFields },
      { new: true }
    );
    return NextResponse.json(updatedProduct, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Error updating product', error: error.message }, { status: 500 });
  }
}