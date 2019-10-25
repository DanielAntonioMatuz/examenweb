'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Producto extends Model {
    invetario(){
        return this.belongsTo('App/Models/Inventario', 'idProducto');
    }
}

module.exports = Producto
