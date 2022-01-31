const config = {
    production: {
        SECRET: process.env.SECRET,
        DATABASE: process.env.MONGODB_URI,
    },

    default: {
        SECRET: 'SUPERSECRETPASSWORD123',
        DATABASE: 'mongodb+srv://subhan:pCIwoawsFJPlxRaW@cluster0.5ktxj.mongodb.net/foodApp?retryWrites=true&w=majority',
    }
}

exports.get = function get(env) {
    return config[env] || config.default
}