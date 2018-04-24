const { spawn} = require('child_process');

function createYo(generatorName, ...args) {
  const filteredArgs = args.filter(arg => arg !== generatorName);
  const argString = filteredArgs.join(' ');
  const cmd = `'yo ${generatorName} ${argString}'`;
  const generatorDependency = generatorName.startsWith('generator-')
    ? generatorName
    : `generator-${generatorName}`;

  const argsForNpx = [
    '--package',
    'yo',
    '--package',
    generatorDependency,
    '-c',
    cmd,
  ];

  const child = spawn('npx', argsForNpx, {
    shell: process.env.SHELL || true,
    stdio: 'inherit'
  });
  child.on('close', process.exit);
}

module.exports = {
  default: createYo,
  createYo,
};
