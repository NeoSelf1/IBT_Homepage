import mongoose from 'mongoose'

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    img: {
      type: Buffer,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
)

export const Post = mongoose.models?.Post || mongoose.model('Post', postSchema)
