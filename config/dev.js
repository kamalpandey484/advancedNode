console.log(
  {"1": process.env.googleClientID,
  "2": process.env.googleClientSecret,
  "3": process.env.mongoURI,
  "4": process.env.cookieKey}
);
module.exports = {
  googleClientID: process.env.googleClientID,
  googleClientSecret: process.env.googleClientSecret,
  mongoURI: process.env.mongoURI,
  cookieKey: process.env.cookieKey,
};
