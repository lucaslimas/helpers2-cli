const command = {
  name: 'inno',
  run: async toolbox => {
    const { print } = toolbox

    print.info('Welcome to your Innovation CLI')
  }
}

module.exports = command
