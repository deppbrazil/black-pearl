module.exports = {
    name: 'docs',
    description: 'Deploy documentation',
    run: async (toolbox) => {
      const {
        system,
        prompt,
        filesystem,
        uploadS3,
        print: { spin },
      } = toolbox;
  
      const project = filesystem.path(__dirname, '..', '..', '..', '..');
  
      const questions = [
        {
          type: 'select',
          name: 'env',
          message: 'Selecione o ambiente?',
          choices: ['dev', 'stage', 'prod'],
        },
      ];
  
      const { env } = await prompt.ask(questions);
  
      const confirm = await prompt.confirm('Tem certeza que deseja continuar?');
  
      const staticFiles = `${project}/.docz/dist`;
  
      const uploadFiles = async () => {
        filesystem.list(staticFiles).forEach((file) => {
          const data = filesystem.inspectTree(`${staticFiles}/${file}`);
  
          const childrenRecursive = (object, filePathName = null) => {
            for (const iterator of object.children) {
              const hasChildrenProperty = Object.prototype.hasOwnProperty.call(
                iterator,
                'children'
              );
  
              if (hasChildrenProperty) {
                childrenRecursive(iterator, object.name);
              }
  
              if (iterator.type === 'file') {
                const extension = iterator.name.split('.').pop();
                const pathFile =
                  (filePathName &&
                    filePathName !== 'page-data' &&
                    `${
                      (extension === 'json' && 'page-data/') || ''
                    }${filePathName}/${object.name}/${iterator.name}`) ||
                  `${(iterator.name === 'page-data.json' && 'page-data/') || ''}${
                    object.name
                  }/${iterator.name}`;
  
                uploadS3(env, {
                  Key: `doc/${pathFile}`,
                  Body: filesystem.read(`${staticFiles}/${pathFile}`, 'buffer'),
                  ContentType: 'text/html',
                });
              }
            }
          };
  
          if (data.type === 'file') {
            uploadS3(env, {
              Key: `doc/${data.name}`,
              Body: filesystem.read(`${staticFiles}/${data.name}`, 'buffer'),
              ContentType: 'text/html',
            });
          } else {
            childrenRecursive(data);
          }
        });
      };
  
      const getBucket = (environment) =>
        ({
          dev: 'bucketName-dev',
          stage: 'bucketName-stg',
          prod: 'bucketName',
        }[environment]);
  
      if (confirm) {
        const spinnerBuild = spin('Gerando build');
        await filesystem.remove(`${project}/.docz`);
        await system.run(`cd ${project} && yarn build:docs`);
        await spinnerBuild.succeed('Build Gerado!');
  
        const spinnerDeploy = spin('Fazendo deploy');
        await system.run('sleep 2');
        await uploadFiles();
        await spinnerDeploy.succeed('Deploy feito com sucesso!');
        await spinnerDeploy.succeed(
          `URL: http://${getBucket(env)}.s3-website-sa-east-1.amazonaws.com/doc/`
        );
      }
    },
  };