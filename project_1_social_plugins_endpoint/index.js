const app = require('./app')
const PORT = process.env.SERVER_PORT
app.listen(PORT, () => {
  console.log(`SERVER IS RUNNING AT PORT ${PORT}`)
})