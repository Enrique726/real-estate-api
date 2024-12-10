import Property from '../models/Property.js';

// Get all properties
export const getProperties = async (req, res) => {
  try {
    const properties = await Property.find();
    res.json(properties);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Get single property
export const getProperty = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    if (!property) {
      return res.status(404).json({ message: 'Property not found' });
    }
    res.json(property);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Create property
export const createProperty = async (req, res) => {
  try {
    const property = new Property({
      ...req.body,
      agent: req.user.id
    });
    await property.save();
    res.status(201).json(property);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};
