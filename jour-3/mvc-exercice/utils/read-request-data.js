module.exports = (req) => {
  return new Promise((res, rej) => {
    let data = "";
    req.once("error", (err) => {
      rej(err);
    });
    req.on("data", (chunk) => {
      data += chunk;
    });
    req.once("end", () => {
      res(data);
    });
  });
};
