import UserModel from "../features/user/user.model.js";
import bcrypt from "bcryptjs"; // Assuming bcrypt is being used for password hashing

const basicAuthorizer = async (req, res, next) => {
    // 1. Check if authorization header is empty.
    const authHeader = req.headers["authorization"];

    if (!authHeader) {
        return res.status(401).send("No authorization details found");
    }
    console.log(authHeader);

    // 2. Extract credentials [Basic qwertyusdfghj345678cvdfgh]
    const base64Credentials = authHeader.replace('Basic ', '');
    console.log(base64Credentials);

    // 3. Decode credentials
    let decodedCreds;
    try {
        decodedCreds = Buffer.from(base64Credentials, 'base64').toString('utf-8');
    } catch (err) {
        return res.status(400).send("Invalid authorization format");
    }
    console.log(decodedCreds); // [username:password]
    const creds = decodedCreds.split(':');

    if (creds.length !== 2) {
        return res.status(400).send("Invalid authorization format");
    }

    // 4. Get the user and validate credentials
    try {
        const users = await UserModel.getAll(); // Assuming this returns a Promise
        const user = users.find(u => u.email === creds[0]);

        if (user) {
            // Assuming bcrypt is used for password hashing
            const isPasswordValid = await bcrypt.compare(creds[1], user.password);
            if (isPasswordValid) {
                return next();
            } else {
                return res.status(401).send("Incorrect password");
            }
        } else {
            return res.status(401).send("User not found");
        }
    } catch (err) {
        console.error(err);
        return res.status(500).send("Server error");
    }
}

export default basicAuthorizer;
