'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Inventario extends Model {
    producto(){
        return this.belongsToMany('App/Models/Producto', 'id');
    }
}

module.exports = Inventario
