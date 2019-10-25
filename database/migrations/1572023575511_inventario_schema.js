'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class InventarioSchema extends Schema {
  up () {
    this.create('inventarios', (table) => {
      table.increments()
      table.timestamps()
      table.integer('idProducto').unsigned().references('id').inTable('productos').onDelete('cascade');
      table.integer('cantidad',50).notNullable();
      table.string('proveedor',50).notNullable();
    })
  }

  down () {
    this.drop('inventarios')
  }
}

module.exports = InventarioSchema
