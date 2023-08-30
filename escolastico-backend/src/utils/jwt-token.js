import jwt from "jsonwebtoken";

export const generateToken = async (id) => {
  return await new Promise((resolve, reject) => {
    const payload = { id };
    jwt.sign(
      payload,
      process.env.SECRET_KEY ?? "secret",
      {
        expiresIn: "2h",
      },
      (err, token) => {
        if (err !== null) {
          console.log(err);
          reject(new Error("No se pudo generar el token"));
        } else {
          resolve(token);
        }
      }
    );
  });
};
