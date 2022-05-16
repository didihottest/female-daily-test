require('dotenv').config()
const { sequelize } = require('./models')

const app = require('./app')
sequelize.sync().then(() => {
  app.listen(process.env.PORT, () => {
    console.log("server is running at port " + process.env.PORT)
  })
}).catch((error) => {
  console.log('====================================');
  console.log(error);
  console.log('====================================');
})