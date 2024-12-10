import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Property from './models/Property.js';

dotenv.config();

const properties = [
  {
    title: "Modern Downtown Condo",
    description: "Beautiful modern condo in the heart of downtown",
    price: 450000,
    location: {
      address: "123 Main St",
      city: "Austin",
      state: "TX",
      zipCode: "78701"
    },
    features: {
      bedrooms: 2,
      bathrooms: 2,
      squareFeet: 1200,
      yearBuilt: 2020,
      propertyType: "Condo"
    },
    images: ["/api/placeholder/800/600"],
    status: "available"
  },
  {
    title: "Luxury Family Home",
    description: "Spacious family home in a quiet neighborhood",
    price: 750000,
    location: {
      address: "456 Oak Ave",
      city: "Austin",
      state: "TX",
      zipCode: "78704"
    },
    features: {
      bedrooms: 4,
      bathrooms: 3,
      squareFeet: 2800,
      yearBuilt: 2018,
      propertyType: "House"
    },
    images: ["/api/placeholder/800/600"],
    status: "available"
  }
];

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    await Property.deleteMany({});
    console.log('Cleared existing properties');

    await Property.insertMany(properties);
    console.log('Added sample properties');

    mongoose.connection.close();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();