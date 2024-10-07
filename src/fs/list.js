import { readdir } from "fs/promises";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const list = async () => {
  const path = `${__dirname}/files`;

  const existMsg = "FS operation failed";

  try {
    const files = await readdir(path);

    for (const file of files) {
      console.log(file);
    }
  } catch (error) {
    throw new Error(existMsg);
  }
};

list();
