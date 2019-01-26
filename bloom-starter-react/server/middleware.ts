import express from "express";

const loggedInSession: express.RequestHandler = async (req, res, next) => {
  if (!req.session || !req.session!.userId) {
    return res
      .status(404)
      .send({ status: "ERROR", message: "Please sign in" })
      .end();
  }

  next();
};

export { loggedInSession };
