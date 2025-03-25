require('dotenv').config();

    const config = {
        port: process.env.PORT || 3000,
        getDbConnectionString: function() {
            return "mongodb+srv://hcosta2601:f2BdxplFa5GfDDHV@cluster0.hem9f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"; // Directly include the MongoDB connection string
        },
        secrets: {
            jwt: process.env.JWT_SECRET || "mysecret"
        },
        jwtExpiresIn: process.env.JWT_EXPIRES_IN || "1h",
    };

module.exports = config;
