const crypto = require("crypto");
const secret = "pppppppppppppppppppppppppppppppp";
const encrypt = (password) => {
  const iv = Buffer.from(crypto.randomBytes(16));
  const cipher = crypto.createCipheriv("aes-256-ctr", Buffer.from(secret), iv);
  const encryptedPassword = Buffer.concat([
    cipher.update(password),
    cipher.final(),
  ]);
  return {
    iv: iv,
    password: encryptedPassword.toString("hex"),
  };
};
const decrypt = (encryption) => {
  const decipher = crypto.createDecipheriv(
    "aes-256-ctr",
    Buffer.from(secret),
    Buffer.from(encryption.iv, "utf8")
  );
  const decryptedPassword = Buffer.concat([
    decipher.update(Buffer.from(encryption.password, "utf8")),
    decipher.final(),
  ]);
  return decryptedPassword.toString();
};

module.exports = { encrypt, decrypt };
