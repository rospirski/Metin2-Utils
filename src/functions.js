const { v4: uuidv4 } = require('uuid')

module.exports = () => {
    return {
        sleep: ms => {
            const start = new Date().getTime()
            for (var i = 0; i < 1e7; i++) {
                if (new Date().getTime() - start > ms) {
                    break
                }
            }
        },
        uuid: () => {
            return uuidv4()
        },
        codeInt: length => {
            return Math.floor(Math.pow(10, length - 1) + Math.random() * 9 * Math.pow(10, length - 1))
        },
    }
}
