const AWS = require('aws-sdk');

module.exports = (toolbox) => {
  const {
    system,
    print: { spin },
  } = toolbox;

  const getAccess = {
    dev: {
      bucket: 'bucketName-dev',
      keys: {
        accessKeyId: '',
        secretAccessKey: '',
      },
    },
    stage: {
      bucket: 'bucketName-stg',
      keys: {
        accessKeyId: '',
        secretAccessKey: '',
      },
    },
    prod: {
      bucket: 'bucketName',
      keys: {
        accessKeyId: '',
        secretAccessKey: '',
      },
    },
  };

  const uploadS3 = async (env, param, msg = false) => {
    const s3 = new AWS.S3(getAccess[env].keys);

    const params = {
      Bucket: getAccess[env].bucket,
      ...param,
    };

    let spinner;
    if (msg) {
      spinner = spin('Fazendo deploy');
      await system.run('sleep 2');
    }

    s3.upload(params, (err, data) => {
      if (err && msg) {
        spinner.fail('🚨 Erro ao executar o deploy 🚨');
        return;
      }

      if (msg) {
        const fileUrl = data.Location;
        spinner.succeed('Deploy feito com sucesso!');
        spinner.succeed(`URL: ${fileUrl}`);
      }
    });
  };

  toolbox.uploadS3 = uploadS3;
};