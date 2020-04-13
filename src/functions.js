const { v4: uuidv4 } = require('uuid')

module.exports = () => {
    return {
        sleep: (ms) => {
            const start = new Date().getTime()
            for (let i = 0; i < 1e7; i += 1) {
                if (new Date().getTime() - start > ms) {
                    break
                }
            }
        },
        uuid: () => {
            return uuidv4()
        },
        codeInt: (length) => {
            return Math.floor(10 ** (length - 1) + Math.random() * 9 * 10 ** (length - 1))
        },
    }
}
