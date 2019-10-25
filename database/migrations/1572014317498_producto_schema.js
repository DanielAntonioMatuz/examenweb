'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductoSchema extends Schema {
  up () {
    this.create('productos', (table) => {
      table.increments()
      table.timestamps()
      table.integer('codigo',50).notNullable().unique();
      table.string('nombreProducto',50).notNullable();
      table.integer('precio',50).notNullable();
      table.string('marca',50).notNullable();
    })
  }

  down () {
    this.drop('productos')
  }
}

module.exports = ProductoSchema
