import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    httpOnly: true, // Prevent XSS attacks
    sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax", // Required for cross-site cookies
    secure: process.env.NODE_ENV === "production", // Cookie only over HTTPS in production
  });

  return token;
};
