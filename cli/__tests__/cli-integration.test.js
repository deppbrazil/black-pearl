const { system, filesystem } = require('gluegun');

const src = filesystem.path(__dirname, '..');
const project = filesystem.path(__dirname, '..', '..');

const cli = async (cmd) =>
  system.run(`node ${filesystem.path(src, 'bin', 'blackpearl')} ${cmd}`);

test('outputs version', async () => {
  const output = await cli('--version');
  expect(output).toContain('0.0.1');
});

test('outputs help', async () => {
  const output = await cli('--help');
  expect(output).toContain('0.0.1');
});

test('generate component', async () => {
  const output = await cli('generate component Teste');

  expect(output).toContain('🚀 Componente Teste criado!');

  // cleanup artifact
  filesystem.remove(`${project}/packages/Teste`);
});