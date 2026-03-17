import jwt from "jsonwebtoken";

const jwtAuth = (req, res, next) => {
  // 1. Read the token from the Authorization header.
  const token = req.headers["authorization"];

  // 2. If no token, return an error.
  if (!token) {
    return res.status(401).json({ message: "No token provided." });
  }

  // 3. Verify the token.
  try {
    const secretKey = "AIb6d35fvJM4O9pXqXQNla2jBCH9kuLz";
    const payload = jwt.verify(token, secretKey);
    req.userID=payload.userID;
    console.log(payload);
    // Attach payload to the request object.
  } catch (err) {
    // 4. Return an error if token verification fails.
    return res.status(401).json({ message: "Invalid token." });
  }

  // 5. Call the next middleware if the token is valid.
  next();
};

export default jwtAuth;
