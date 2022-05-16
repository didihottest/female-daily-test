'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Order', [
      {
        Firstname: 'John',
        Lastname: 'Doe',
        Email: 'john@example.com',
        Item: 'Barang1',
        Quantity: 1,
        Total_Price: 100000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Firstname: 'John',
        Lastname: 'Doe',
        Email: 'john@example.com',
        Item: 'Barang1',
        Quantity: 2,
        Total_Price: 200000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Firstname: 'John',
        Lastname: 'Doe',
        Email: 'john@example.com',
        Item: 'Barang2',
        Quantity: 2,
        Total_Price: 200000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Firstname: 'Jane',
        Lastname: 'Doe',
        Email: 'jane@example.com',
        Item: 'Barang1',
        Quantity: 2,
        Total_Price: 200000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Firstname: 'Steve',
        Lastname: 'Roger',
        Email: 'steve@example.com',
        Item: 'Barang1',
        Quantity: 1,
        Total_Price: 50000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Firstname: 'Steve',
        Lastname: 'Roger',
        Email: 'steve@example.com',
        Item: 'Barang2',
        Quantity: 1,
        Total_Price: 50000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Firstname: 'Conor',
        Lastname: 'Mcgregor',
        Email: 'conor@example.com',
        Item: 'Barang3',
        Quantity: 1,
        Total_Price: 50000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Firstname: 'Stephen',
        Lastname: 'Strange',
        Email: 'stephen@example.com',
        Item: 'Barang2',
        Quantity: 4,
        Total_Price: 200000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Firstname: 'Thanos',
        Lastname: 'World',
        Email: 'thanos@example.com',
        Item: 'Barang1',
        Quantity: 1,
        Total_Price: 50000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Firstname: 'Tony',
        Lastname: 'Stark',
        Email: 'tony@example.com',
        Item: 'Barang1',
        Quantity: 5,
        Total_Price: 250000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Firstname: 'Thor',
        Lastname: 'Odinson',
        Email: 'thor@example.com',
        Item: 'Barang2',
        Quantity: 1,
        Total_Price: 50000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Firstname: 'Wanda',
        Lastname: 'Vision',
        Email: 'wanda@example.com',
        Item: 'Barang1',
        Quantity: 1,
        Total_Price: 50000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Order', null, {});
  }
};