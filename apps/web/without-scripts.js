const { readFileSync, writeFileSync, rmSync, readdirSync, statSync } = require('node:fs');
const { JSDOM } = require('jsdom');

const file = readFileSync('./out/index.html', { encoding: 'utf8' });
const dom = new JSDOM(file);

dom.window.document.querySelectorAll('script').forEach(element => element.remove());
dom.window.document.querySelectorAll('link[rel="preload"][as="script"]').forEach(element => element.remove());

const updatedDocument = dom.serialize();
writeFileSync('./out/index.html', updatedDocument);

rmSync('./out/index.txt');
rmSync('./out/.gitkeep');
clearScriptDirectories();

function clearScriptDirectories() {
  const baseDir = './out/_next/static';
  const dirsToKeep = ['css', 'media'];

  const files = readdirSync(baseDir);
  files.forEach(file => {
    const path = `./out/_next/static/${file}`
    const stats = statSync(path);

    if (stats.isDirectory() && !dirsToKeep.includes(file)) {
      // Remove the directory
      rmSync(path, { recursive: true, force: true });
    }
  })
}
