const { readFile } = require('fs').promises;
const path = require('path');

async function main() {
  const buildID = await readFile(
    path.resolve(__dirname, './buildID'),
    { encoding: 'utf8' }
  );
  const hash = Buffer.from(buildID).toString();

  // Include current date to return fresh new hash for every
  // function calls
  return (hash + new Date().toDateString());
}

main()
  .catch(err => {
    console.error('Error', err.stack);
    process.exit(1);
  });
