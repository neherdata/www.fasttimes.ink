const conn = require("./conn");

const { STRING, UUID, UUIDV4, TEXT, BOOLEAN } = conn.Sequelize;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const JWT = process.env.JWT;

const Artist = conn.define("artist", {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  },
  name: {
    type: STRING,
    // allowNull: false,
    // validate: {
    //   notEmpty: {
    //     msg: "Artist must have a name",
    //   },
    // },
  },
  username: {
    type: STRING,
    // allowNull: false,
    // validate: {
    //   notEmpty: {
    //     msg: "To have access, must have a username",
    //   },
    // },
    // unique: true,
  },
  // password: {
  //   type: STRING,
  //   allowNull: false,
  //   validate: {
  //     notEmpty: true,
  //   },
  // },
  // email: {
  //   type: STRING,
  //   unique: true,
  //   validate: {
  //     notEmpty: {
  //       msg: "All artists must provide an email for contacting purposes",
  //     },
  //     isEmail: {
  //       msg: "Please enter a valid email address",
  //     },
  //   },
  // },
  social: {
    type: STRING,
    // allowNull: false,
    // validate: {
    //   notEmpty: {
    //     msg: "Please enter the URL link to social",
    //   },
    //   isUrl: {
    //     msg: "Please enter a valid URL",
    //   },
    // },
  },
  // 	isAdmin: {
  // 		type: BOOLEAN,
  // 		defaultValue: false,
  // 		allowNull: false,
  // 	},
});

Artist.addHook("beforeSave", async (artist) => {
  if (artist.changed("password")) {
    artist.password = await bcrypt.hash(artist.password, 5);
  }
});

Artist.findByToken = async function (token) {
  try {
    const { id } = jwt.verify(token, process.env.JWT);
    const artist = await this.findByPk(id);
    if (artist) {
      return artist;
    }
    throw "artist not found";
  } catch (ex) {
    const error = new Error("bad credentials");
    error.status = 401;
    throw error;
  }
};

Artist.prototype.generateToken = function () {
  return jwt.sign({ id: this.id }, JWT);
};

Artist.authenticate = async function ({ username, password }) {
  const artist = await this.findOne({
    where: {
      username,
    },
  });
  if (artist && (await bcrypt.compare(password, artist.password))) {
    return jwt.sign({ id: artist.id }, JWT);
  }
  const error = new Error("bad credentials");
  error.status = 401;
  throw error;
};

Artist.authenticateAsAdmin = async function ({ username, password }) {
  const artist = await this.findOne({
    where: {
      username,
    },
  });
  if (artist && (await bcrypt.compare(password, artist.password))) {
    if (!artist.isAdmin) {
      const error = new Error("You must be an admin to login");
      error.status = 401;
      throw error;
    }
    return jwt.sign({ id: artist.id }, JWT);
  }
};

module.exports = Artist;
