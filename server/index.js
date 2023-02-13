const app = require("./app");

// db pulls for email storing , later.

const init = async () => {
  try {
    const port = process.env.PORT || 3000;
    const server = app.listen(port, () => console.log(`on port ${port}`));
  } catch (ex) {
    console.log(ex);
  }
};

init();
