const command = {
  name: 'test',
  alias: ['t'],
  run: async toolbox => {
    const { print, parameters } = toolbox

    console.log(parameters)

    print.info('Olá eu sou um teste')
  }
}

module.exports = command
