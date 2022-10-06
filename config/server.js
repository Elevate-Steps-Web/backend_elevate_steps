module.exports = ({ env }) => ({
  host: env('HOST', '127.0.0.1'),
  url: env("SUBDOMAIN_URL"),
  port: env.int('PORT', 1337),
  proxy: true,
  app: {
    keys: env.array('APP_KEYS', ['keys', 'keys']),
  },
});
