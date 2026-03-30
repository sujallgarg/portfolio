import mongoose from 'mongoose'

const contactSubmissionSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, maxlength: 200 },
    email: { type: String, required: true, trim: true, maxlength: 320 },
    message: { type: String, required: true, trim: true, maxlength: 10000 },
  },
  { timestamps: true },
)

export default mongoose.models.ContactSubmission ??
  mongoose.model('ContactSubmission', contactSubmissionSchema)