import { z } from "zod";

const signupSchema = z.object({
  username: z
    .string({
      required_error: "Username is required",
    })
    .min(3, { message: "Minimum length is 3 characters" })
    .max(20),
  email: z.string({}).email({ message: "Invalid email address" }),
  fullName: z.string().min(3).max(50),
  password: z.string().min(4).max(20),
});

export default signupSchema;
