import joi from 'joi'

const signUpSchema = joi.object({
    name: joi.string().required().messages({ 'string.empty': 'Campo nome é obrigatório', }),
    email: joi.string().email({ tlds: { allow: false } }).required().messages({ 'string.empty': 'Campo email é obrigatório', 'string.email': 'Insira um email válido' }),
    password: joi.string().required().messages({ 'string.empty': 'Campo senha é obrigatório' }),
    confirmPassword: joi.string().valid(joi.ref('password')).messages({ 'any.only': 'As senhas devem ser iguais' })
})
export default signUpSchema
