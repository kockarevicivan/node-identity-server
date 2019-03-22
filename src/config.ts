/**
 * @file Defines all constants required for application configuration.
 * @author Ivan Kockarevic
 */
const config = {
    databaseUrl: 'mongodb://localhost/node_identity_server',
    port: 3000,
    saltRounds: 10,
    secret: 'qwertyuiopasdfghjklzxcvbnm1234567890',
    tokenExpirySeconds: 14400,
};

export default config;
