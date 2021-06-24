const command = {
    name: 'blackpearl',
    run: async (toolbox) => {
      const { print } = toolbox;
  
      print.info('☠️ Welcome to Black Pearl Ship CLI ☠️');
    },
  };
  
  module.exports = command;