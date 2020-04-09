const rules = require('./src/rules')
const functions = require('./src/functions')
module.exports = config => {
    return {
        rules: rules(config && config.rules),
        func: functions,
    }
}
