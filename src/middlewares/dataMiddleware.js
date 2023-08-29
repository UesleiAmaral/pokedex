export const middleware = {
  validatePost(req, res, next) {
    const { body } = req;

    if (body.name === "") {
      return res.status(400).json({ message: "name cannot be empty" });
    }

    next();
  },

  validateGet(req, res, next) {
    next();
    return console.log("validate!");
  },
};
