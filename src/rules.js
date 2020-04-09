const validator = require('validator')
const moment = require('moment')
module.exports = config => {
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
        id: v => {
            if (!v) return 'error.form.id.empty'
            if (!validator.isInt(v + '', { min: configs.id_min })) return 'error.form.id.invalid'
        },
        login: v => {
            if (!v) return 'error.form.login.empty'
            if (!validator.isAlphanumeric(v)) return 'error.form.login.invalid'
            if (!validator.isByteLength(v, { min: configs.login_min, max: configs.login_max })) return 'error.form.login.minmax'
        },
        password: v => {
            if (!v) return 'error.form.password.empty'
            if (!validator.isByteLength(v, { min: configs.password_min, max: configs.password_max })) return 'error.form.password.minmax'
        },
        repassword: (v, r) => {
            if (v !== r) return 'error.form.repassword.invalid'
        },
        email: v => {
            if (!v) return 'error.form.email.minmax'
            if (!validator.isEmail(v)) return 'error.form.email.invalid'
        },
        code: v => {
            if (!v) return 'error.form.code.empty'
            if (!validator.isInt(v + '')) 'error.form.code.int'
            if (!validator.isByteLength(v, { min: configs.code_min, max: configs.code_max })) return 'error.form.code.minmax'
        },
        social_id: v => {
            if (!v) return 'error.form.social_id.empty'
            if (!validator.isInt(v + '')) return 'error.form.social_id.int'
            if ((v + '').length !== configs.social_id_length) return 'error.form.social_id.length'
        },
        locale: v => {
            if (!v) return 'error.form.locale.empty'
            if (!validator.isAlpha(v)) return 'error.form.locale.invalid'
            if (!v.length !== configs.locale_length) return 'error.form.locale.length'
        },
        name: v => {
            if (!v) return 'error.form.name.empty'
            if (!validator.isAlpha(v.replace(/ /g, ''))) return 'error.form.name.invalid'
            if (!validator.isByteLength(v, { min: configs.name_min, max: configs.name_max })) return 'error.form.name.minmax'
        },
        surname: v => {
            if (!v) return 'error.form.surname.empty'
            if (!validator.isAlpha(v.replace(/ /g, ''))) return 'error.form.surname.invalid'
            if (!validator.isByteLength(v, { min: configs.surname_min, max: configs.surname_max })) return 'error.form.surname.minmax'
        },
        phone: v => {
            if (!v) return 'error.form.phone.empty'
            if (!validator.isMobilePhone(v + '')) return 'error.form.phone.invalid'
        },
        birth: v => {
            if (!v) return 'error.form.birth.empty'
            if (!moment(v, configs.birth_format, true).isValid()) return 'error.form.birth.invalid'
        },
        country: v => {
            if (!v) return 'error.form.country.empty'
            if (!validator.isAlpha(v)) return 'error.form.country.invalid'
            if (v.length !== configs.country_length) return 'error.form.country.length'
        },
        sex: v => {
            if (!v) return 'error.form.sex.empty'
            if (!validator.isAlpha(v + '')) return 'error.form.sex.invalid'
            if ((v + '').length !== configs.sex_length) return 'error.form.sex.length'
        },
        account_id: v => {
            if (!v) return 'error.form.account_id.empty'
            if (!validator.isInt(v + '', { min: configs.account_id_min })) return 'error.form.account_id.invalid'
        },
        page: v => {
            if (!v) return 'error.form.page.empty'
            if (!validator.isInt(v + '', { min: 1 })) return 'error.form.page.invalid'
        },
        quantity: v => {
            if (!v) return 'error.form.quantity.empty'
            if (!validator.isInt(v + '', { min: 1 })) return 'error.form.quantity.invalid'
        },
        job: v => {
            if (!v) return 'error.form.job.empty'
            if (!validator.isInt(v + '', { min: 0, max: 8 })) return 'error.form.job.invalid'
        },
        empire: v => {
            if (!v) return 'error.form.empire.empty'
            if (!validator.isInt(v + '', { min: 1, max: 3 })) return 'error.form.empire.invalid'
        },
        type: v => {
            if (!v) return 'error.form.type.empty'
            if (!validator.isInt(v + '', { min: 0 })) return 'error.form.type.invalid'
        },
        ref: v => {
            if (!v) return 'error.form.ref.empty'
            if (!validator.isInt(v + '', { min: configs.id_min })) return 'error.form.ref.invalid'
        },
        nick: v => {
            if (!v) return 'error.form.nick.empty'
            if (!validator.isAlphanumeric(v)) return 'error.form.nick.invalid'
            if (!validator.isByteLength(v, { min: configs.nick_min, max: configs.nick_max })) return 'error.form.nick.minmax'
        },
    }
}
