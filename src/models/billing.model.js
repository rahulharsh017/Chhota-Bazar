import mongoose from 'mongoose';

const BillingSchema = new mongoose.Schema({
  items: [
    {
      _id: String,
      name: String,
      category: String,
      price: Number,
      quantity: Number,
      imageUrl: String,
    },
  ],
  totalAmount: Number,
  date: { type: Date, default: Date.now },
});

const Billing = mongoose.models.Billing || mongoose.model('Billing', BillingSchema);
export default Billing;