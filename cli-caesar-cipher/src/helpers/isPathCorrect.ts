const fs = require("fs");

const isPathCorrect = async (filename: string): Promise<boolean> => {
  try {
    await fs.promises.access(filename);
    return true;
  } catch (err) {
    console.error("Error occured while reading directory!", err);
    return false;
  }
};

export default isPathCorrect;
