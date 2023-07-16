const User = require('../models/User');
const createError = require('http-errors');

const register = async (req, res) => {
    const { name, email, password } = req.body

    try {
        if ([name, email, password].includes("")|| !name || !email || !password ) {
            throw createError(400, "Todos los campos son obligatorios")
        }
        let user = await User.findOne({
            email
        })
        if (user) {
            throw createError(400, "El email ya se encuentra registrado")
        }

        user = new User(req.body);
        user.token = "asfasfasfasf"
        const useStore = await user.save()
        //TODO ENVIAR EMAIL DE CONFIRMACION DE REGISTRO

        return res.status(201).json({
            ok: true,
            message: "Usuario registrado"
        })


    } catch (error) {
        return res.status(error.status || 500).json({
            ok: false,
            message: error.message || "Upss, hubo un error"
        })
    }


}


module.exports = {
register
}