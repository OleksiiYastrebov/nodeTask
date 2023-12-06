import fs from 'fs/promises';
import { resolve } from 'path';
import getmostcommonletter from 'getmostcommonletter';

async function getMostCommonLetterFromFile() {
   try {
      const pathStr = process.argv[2];
      const data = await fs.readFile(resolve(pathStr), 'utf-8');
      return getmostcommonletter(data);
   } catch {
      throw new Error('Wrong path argument');
   }
}

console.log(await getMostCommonLetterFromFile('lorem.txt'));
