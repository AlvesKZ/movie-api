import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "The movie must have a name"],
    trim: true,
  },
  synopsis: {
    type: String,
    trim: true,
  },
  director: {
    type: String,
    required: [true, "The movie must have a director"],
    trim: true,
  },
  categories: {
    type: Array,
    required: [true, "The movie must be at least one category"],
    validate: {
      validator: (val) => val.length >= 1,
      message: "The movie must have at least one category",
    },
  },
  duration: {
    type: Number,
    required: [true, "The movie must have a duration"],
  },
});
