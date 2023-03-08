const conn = require("./conn");
const Artist = require("./Artist");

/*Jeff Michel Hans Ryan Isaiah Onaga Karissa Anne Billy Pappas*/

const info = async () => {
  await conn.sync({ force: true });

  const [jeff, hans, isaiah, karissa, billy] = await Promise.all([
    Artist.create({
      name: "Jeff Michel",
      username: "jeffmichel_ftt", // use their ig handles here
      // email: "",
      social: "https://www.instagram.com/jeffmichel_ftt/?hl=en",
    }),
    Artist.create({
      name: "Hans Ryan",
      username: "hailhansy",
      // email: "",
      social: "https://www.instagram.com/hailhansy/?hl=en",
    }),
    Artist.create({
      name: "Isaiah Onaga",
      username: "onagasteel",
      // email: "",
      social: "https://www.instagram.com/onagasteel/?hl=en",
    }),
    Artist.create({
      name: "Karissa Anne",
      username: "kkaarriissaannee",
      // email: "sunlightgardiner@gmail.com",
      social: "https://www.instagram.com/kkaarriissaannee/?hl=en",
    }),
    Artist.create({
      name: "Billy Pappas",
      username: "swimreaper",
      // email: "",
      social: "https://www.instagram.com/swimreaper/?hl=en",
    }),
  ]);

  return {
    jeff,
    hans,
    isaiah,
    karissa,
    billy,
  };
};

module.exports = {
  info,
  Artist,
};
