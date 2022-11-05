import fs from 'fs';

import path from 'path';

const makeServiceExportAll = (pathOfServices: string)=>{
  const files = fs.readdirSync(pathOfServices, { withFileTypes: true });
  for (const file of files){
    if (file.isDirectory()){
      const serviceFileName = file.name;
      const serviceFilePath = path.join(pathOfServices, `${serviceFileName}.ts`); // assumed that we always have a file with same name of the directory

      const pathOfServiceDirectory = path.join(pathOfServices, serviceFileName); 
      const serviceDirectoryFiles = fs.readdirSync(pathOfServiceDirectory, { withFileTypes: true });

      let indexFileContent = '';

      serviceDirectoryFiles.forEach((file)=>{
        if (file.name !== 'index.ts'){
          const fileName = file.name.replace('.ts', '');
          indexFileContent += `export * from './${serviceFileName}/${fileName}';\r`;
        }
      });
      
      fs.appendFileSync(serviceFilePath, indexFileContent);
    }
  }
}

const pathOfServices = path.join(__dirname, '../services/');
void makeServiceExportAll(pathOfServices);