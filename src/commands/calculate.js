const command = {
  name: 'calculate',
  alias: ['calc'],
  run: async toolbox => {
    const { print, parameters } = toolbox

    const { first, second, options } = parameters

    const { op } = options

    let result = null

    switch (op) {
      case 'soma':
        result = first + second
        print.info(`${first} + ${second} = ${result}`)
        break

      case 'subt':
        result = first - second
        print.info(`${first} - ${second} = ${result}`)
        break

      case 'mult':
        result = first * second
        print.info(`${first} x ${second} = ${result}`)
        break

      case 'div':
        result = first / second
        print.info(`${first} / ${second} = ${result}`)
        break

      default:
        print.error('Operador não informado ou não encontrado')
        break
    }
  }
}

module.exports = command
