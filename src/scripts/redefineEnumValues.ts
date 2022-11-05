import fs from 'fs';

import path from 'path';
import readline from 'readline';

const redefineEnumValues = async (pathOfServices: string) => {
  const files = fs.readdirSync(pathOfServices, { withFileTypes: true });
  for await (const file of files) {
    const isDirectory = file.isDirectory();
    if (isDirectory) {
      const pathOfFiles = path.join(__dirname, '../services/' + file.name);
      redefineEnumValues(pathOfFiles);
    }
    if (file.isFile() && file.name.includes('Enum')) {
      const pathOfFile = path.join(pathOfServices, '/' + file.name);
      const fileStream = fs.createReadStream(pathOfFile);
      const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity,
      });
      let fileContent = ''
      for await (const line of rl) {

        const trimmedLine = line.trim();
        const index = trimmedLine.indexOf(' = ')
        if (index !== -1) {
          const key = trimmedLine.substring(0, index);
          const newLine = line.replace(/= [0-9]+,/g, " = '" + key + "',");
          fileContent += newLine + '\n';
        } else {
          fileContent += line + '\n';
        }
      }
      fs.writeFileSync(pathOfFile, fileContent);
    }
  }
}

const pathOfServices = path.join(__dirname, '../services/');
void redefineEnumValues(pathOfServices);