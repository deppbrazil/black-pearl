module.exports = {
  name: 'component',
    description: 'Create new component',
    run: async (toolbox) => {
      const {
        parameters,
        template,
        strings,
        filesystem,
        system,
        print: { success, error },
      } = toolbox;

      const project = filesystem.path(__dirname, '..', '..', '..', '..');

      const name = strings.pascalCase(parameters.first);

      if (!name) {
        error('🏴‍☠️ Hey marujo! você precisa dar um nome ao componente 🏴‍☠️');
        return;
      }

      await template.generate({
        template: 'component/package.json.ejs',
        target: `${project}/packages/${name}/package.json`,
        props: { name: strings.kebabCase(name) },
      });

      await template.generate({
        template: 'component/babel.config.js.ejs',
        target: `${project}/packages/${name}/babel.config.js`,
      });

      await template.generate({
        template: 'component/jest.config.js.ejs',
        target: `${project}/packages/${name}/jest.config.js`,
      });

      await template.generate({
        template: 'component/lib/index.js.ejs',
        target: `${project}/packages/${name}/lib/index.js`,
        props: { name },
      });

      await template.generate({
        template: 'component/lib/styles.js.ejs',
        target: `${project}/packages/${name}/lib/styles.js`,
        props: { name },
      });

      await template.generate({
        template: 'component/docs/index.js.ejs',
        target: `${project}/packages/${name}/docs/${name}.mdx`,
        props: { name, route: strings.kebabCase(name) },
      });

      await template.generate({
        template: 'component/__tests__/index.js.ejs',
        target: `${project}/packages/${name}/__tests__/index.test.js`,
        props: { name },
      });

      await system.run(`yarn prettier --write ${project}/packages/${name}`);

      await system.run(`git checkout -b ${name}/0.1.0 master`);

      success(`⚓ Componente ${name} criado! ⚓`);
    },
}
