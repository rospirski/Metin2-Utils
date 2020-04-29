const validator = require('validator')
const moment = require('moment')

module.exports = (config) => {
    const configsDefault = {
        id_min: 1,

        login_min: 3,
        login_max: 16,

        password_min: 6,
        password_max: 16,

        code_min: 6,
        code_max: 6,

        social_id_length: 7,

        locale_length: 2,

        name_min: 3,
        name_max: 16,

        surname_min: 3,
        surname_max: 16,

        birth_format: 'YYYY-MM-DD',

        country_length: 2,

        sex_length: 1,

        account_id_min: 1,

        nick_min: 3,
        nick_max: 16,
    }

    const configs = {
        ...configsDefault,
        ...config,
    }

    return {
        id: (v) => {
            if (!v) return 'form.error.id.empty'
            if (!validator.isInt(`${v}`, { min: configs.id_min })) return 'form.error.id.invalid'
            return true
        },
        login: (v) => {
            if (!v) return 'form.error.login.empty'
            if (!validator.isAlphanumeric(v)) return 'form.error.login.invalid'
            if (!validator.isByteLength(v, { min: configs.login_min, max: configs.login_max })) return 'form.error.login.minmax'
            return true
        },
        password: (v) => {
            if (!v) return 'form.error.password.empty'
            if (!validator.isByteLength(v, { min: configs.password_min, max: configs.password_max })) return 'form.error.password.minmax'
            return true
        },
        repassword: (v, r) => {
            if (v !== r) return 'form.error.repassword.invalid'
            return true
        },
        email: (v) => {
            if (!v) return 'form.error.email.minmax'
            if (!validator.isEmail(v)) return 'form.error.email.invalid'
            return true
        },
        code: (v) => {
            if (!v) return 'form.error.code.empty'
            if (!validator.isInt(`${v}`)) return 'form.error.code.int'
            if (!validator.isByteLength(v, { min: configs.code_min, max: configs.code_max })) return 'form.error.code.minmax'
            return true
        },
        social_id: (v) => {
            if (!v) return 'form.error.social_id.empty'
            if (!validator.isInt(`${v}`)) return 'form.error.social_id.int'
            if (`${v}`.length !== configs.social_id_length) return 'form.error.social_id.length'
            return true
        },
        locale: (v) => {
            if (!v) return 'form.error.locale.empty'
            if (!validator.isAlpha(v)) return 'form.error.locale.invalid'
            if (!v.length !== configs.locale_length) return 'form.error.locale.length'
            return true
        },
        name: (v) => {
            if (!v) return 'form.error.name.empty'
            if (!validator.isAlpha(v.replace(/ /g, ''))) return 'form.error.name.invalid'
            if (!validator.isByteLength(v, { min: configs.name_min, max: configs.name_max })) return 'form.error.name.minmax'
            return true
        },
        surname: (v) => {
            if (!v) return 'form.error.surname.empty'
            if (!validator.isAlpha(v.replace(/ /g, ''))) return 'form.error.surname.invalid'
            if (!validator.isByteLength(v, { min: configs.surname_min, max: configs.surname_max })) return 'form.error.surname.minmax'
            return true
        },
        phone: (v) => {
            if (!v) return 'form.error.phone.empty'
            if (!validator.isMobilePhone(`${v}`)) return 'form.error.phone.invalid'
            return true
        },
        birth: (v) => {
            if (!v) return 'form.error.birth.empty'
            if (!moment(v, configs.birth_format, true).isValid()) return 'form.error.birth.invalid'
            return true
        },
        country: (v) => {
            if (!v) return 'form.error.country.empty'
            if (!validator.isAlpha(v)) return 'form.error.country.invalid'
            if (v.length !== configs.country_length) return 'form.error.country.length'
            return true
        },
        sex: (v) => {
            if (!v) return 'form.error.sex.empty'
            if (!validator.isAlpha(`${v}`)) return 'form.error.sex.invalid'
            if (`${v}`.length !== configs.sex_length) return 'form.error.sex.length'
            return true
        },
        account_id: (v) => {
            if (!v) return 'form.error.account_id.empty'
            if (!validator.isInt(`${v}`, { min: configs.account_id_min })) return 'form.error.account_id.invalid'
            return true
        },
        page: (v) => {
            if (!v) return 'form.error.page.empty'
            if (!validator.isInt(`${v}`, { min: 1 })) return 'form.error.page.invalid'
            return true
        },
        quantity: (v) => {
            if (!v) return 'form.error.quantity.empty'
            if (!validator.isInt(`${v}`, { min: 1 })) return 'form.error.quantity.invalid'
            return true
        },
        job: (v) => {
            if (!v) return 'form.error.job.empty'
            if (!validator.isInt(`${v}`, { min: 0, max: 8 })) return 'form.error.job.invalid'
            return true
        },
        empire: (v) => {
            if (!v) return 'form.error.empire.empty'
            if (!validator.isInt(`${v}`, { min: 1, max: 3 })) return 'form.error.empire.invalid'
            return true
        },
        type: (v) => {
            if (!v) return 'form.error.type.empty'
            if (!validator.isInt(`${v}`, { min: 0 })) return 'form.error.type.invalid'
            return true
        },
        ref: (v) => {
            if (!v) return 'form.error.ref.empty'
            if (!validator.isInt(`${v}`, { min: configs.id_min })) return 'form.error.ref.invalid'
            return true
        },
        nick: (v) => {
            if (!v) return 'form.error.nick.empty'
            if (!validator.isAlphanumeric(v)) return 'form.error.nick.invalid'
            if (!validator.isByteLength(v, { min: configs.nick_min, max: configs.nick_max })) return 'form.error.nick.minmax'
            return true
        },
    }
}
