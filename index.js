import fs from 'fs/promises';
import  { resolve } from 'path';
import getmostcommonletter from 'getmostcommonletter';

async function getMostCommonLetterFromFile() {
   const pathStr = process.argv[2];
   if (!pathStr) {
      throw new Error('No path were provided')
   }
   const data = await fs.readFile(resolve(pathStr), 'utf-8');
   return getmostcommonletter(data);
}

console.log(await getMostCommonLetterFromFile('lorem.txt'));
