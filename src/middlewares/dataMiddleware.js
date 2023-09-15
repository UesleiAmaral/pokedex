export const middleware = {
  validatePost(req, res, next) {
    const data = req.body;
    if (data.name == "") {
      return res.send({ message: "name cannot be empty" });
    }

    if (data.image == "") {
      return res.send({ message: "image cannot be empty" });
    }

    if (data.abilities == "") {
      return res.send({ message: "abilities cannot be empty" });
    }

    next();
  },

  validateGet(req, res, next) {
    next();
    return console.log("validate!");
  },

  validateDelete(req, res, next) {
    if (isNaN(req.params.id)) {
      return res.send({ message: "NaN" });
    }
    next();
  },

  validateUpdate(req, res, next) {
    if (isNaN(req.body.id)) {
      return res.send({ message: "id não pode ser string" });
    }
    next();
  },

  validateFilterByName(req, res, next) {
    if (!isNaN(req.params.name)) {
      return res.send({ message: "Nome não pode ser um numero!" });
    }

    next();
  },

  validateFilterById(req, res, next) {
    if (isNaN(req.params.id)) {
      return res.send({ message: "NaN" });
    }

    next();
  },
};
