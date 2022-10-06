const { parse } = require("pg-connection-string");

module.exports = ({ env }) => {
    const { host, port, database, user, password } = parse(env("DATABASE_URL"));
    
    return {
        connection: {
            client: 'postgres',
            connection: {
                host,
                port,
                database,
                user,
                password,
                // ssl: { rejectUnauthorized: false },
            },
            debug: false,
	    acquireConnectionTimeout: 5000000,
    	    pool: {
      		min: 0,
      		max: 50,
      		createTimeoutMillis: 300000,
      		acquireTimeoutMillis: 300000,
      		idleTimeoutMillis: 300000,
      		reapIntervalMillis: 300000,
      		createRetryIntervalMillis: 2000,
      		propagateCreateError: false,
    	    },
        },
    }
};
