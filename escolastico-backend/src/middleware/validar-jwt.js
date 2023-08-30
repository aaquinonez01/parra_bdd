import jwt from "jsonwebtoken";
export const validarJWT = (req, res, next) => {
  const token = req.header("x-token");
  if (token === null || token === undefined) {
    return res.status(401).json({
      ok: false,
      message: "Necesita Estar Autenticado para realizar esta acción",
    });
  }

  try {
    const payload = jwt.verify(
      token,
      process.env.SECRET_JWT_SEED ?? "tu-secreto-seguro"
    );
    req.body.idUsuario = payload.idUsuario;
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      console.log(error);
      return res.status(401).json({
        ok: false,
        message: "La sesión ha expirado, por favor vuelva a iniciar sesión",
      });
    }

    return res.status(401).json({
      ok: false,
      message: "No se ha Autenticado correctamente",
    });
  }
  next();
};
