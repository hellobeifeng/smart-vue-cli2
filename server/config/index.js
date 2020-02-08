const env = process.env.NODE_BK_ENV || 'test'

const config = {
  dev: require('./config.dev'),
  test: require('./config.test'),
  release: require('./config.release')
}
console.log('NODE_BK_ENV:', env)
exports.getEnv = () => env
exports.getConfig = () => config[env]
