import User from "../models/User.js";

export const getUser = async (req, res) => {
  try {
    // grabing id from req params
    const { id } = req.params;
    // find user by ID
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
