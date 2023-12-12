import loginValidation from "../validations/auth.validation.js";
import User from "../models/user.js"
import bcrypt from "bcrypt";

export default {
  signup: async (req, res) => {
    try {
      const data = await req.body;
      // validation of user data
      const isValid = loginValidation.safeParse(data);
      if (isValid.success) {
        // check if user already exists
        const isExist = await User.findOne({
          email: isValid.data.email,
        });

        if (isExist) {
          return res.status(400).send({ message: "User already exist" });
        }
        const hashedPassword = await bcrypt.hash(isValid.data.password, 10);
        // save user to database
        const savedUser = await User.create({
          ...isValid.data,
          password: hashedPassword,
        });
        return res
          .status(201)
          .send({ message: "User created successfully", data: savedUser });
      } else {
        return res
          .status(400)
          .send({ message: isValid.error.formErrors.fieldErrors });
      }
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Internal server error" });
    }
  },
};
