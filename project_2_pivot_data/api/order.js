const { QueryTypes } = require("sequelize")
const { sequelize } = require("../models")

const Order = require("../models").Order

const orderList = async (req, res, next) => {
  try {
    const orderList = await Order.findAll()
    res.render('list', {
      data: orderList
    })
  } catch (error) {
    console.log(error)
  }
}

const orderPivot = async (req, res, next) => {
  try {
    const query = `SELECT
                    CONCAT("Firstname", ' ', "Lastname") as "Full_Name",
                    "Email",
                    "Item",
                    SUM ("Quantity") as "QTY_Total"
                  FROM
                    "Order"
                  GROUP BY
                    "Item",
                    "Firstname",
                    "Lastname",
                    "Email"
                  ORDER BY
                    "Email"
                    `
    const orderData = await sequelize.query(query, { type: QueryTypes.SELECT })

    const column = ['Full Name', 'Email']
    const dynamicColumn = {}
    const restructuredData = []
    for (const columnData of orderData) {
      const isColumnExists = column.find((item) => item === columnData.Item)
      if (!isColumnExists) {
        column.push(columnData.Item)
      }
      dynamicColumn[columnData.Item] = 0

    }

    for (const index in orderData) {
      // check apakah data sudah ada di restructured data
      let filteredIndex = restructuredData.findIndex(value => {
        return value.Email === orderData[index].Email
      })
      // bila belum input data
      if (!(filteredIndex != -1)) {
        let dataToBeAdded = { ...dynamicColumn }
        dataToBeAdded.Full_Name = orderData[index].Full_Name
        dataToBeAdded.Email = orderData[index].Email
        dataToBeAdded[orderData[index].Item] = orderData[index].QTY_Total
        restructuredData.push(dataToBeAdded)
      } else {
        // jika sudah modifikasi data 
        restructuredData[filteredIndex][orderData[index].Item] = orderData[index].QTY_Total
      }
    }

    res.render('pivot', {
      data: restructuredData,
      column
    })

  } catch (error) {

    res.send(error)
    console.log(error)
  }
}

module.exports = {
  orderList,
  orderPivot
}