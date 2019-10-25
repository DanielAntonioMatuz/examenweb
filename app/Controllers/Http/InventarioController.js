'use strict'
const Inventario = use('App/models/inventario');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with inventarios
 */
class InventarioController {
  /**
   * Show a list of all inventarios.
   * GET inventarios
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let registros = await Inventario.all();
    response.json({registros:registros.rows})
  }

  /**
   * Render a form to be used for creating a new inventario.
   * GET inventarios/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
    console.log(request.all())
    await Inventario.create(request.all());
    return response.json("datos registrado");
  }

  /**
   * Create/save a new inventario.
   * POST inventarios
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    
  }

  /**
   * Display a single inventario.
   * GET inventarios/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    let inventario = await Inventario.find(params.id);
    return response.json({inventario:inventario});
  }

  /**
   * Render a form to update an existing inventario.
   * GET inventarios/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
    let inventario = await Inventario.find(params.id);
    inventario.merge(request.all());
    await inventario.save();
    return response.json( "Registro editado");
  }

  /**
   * Update inventario details.
   * PUT or PATCH inventarios/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    let inventario = await Inventario.find(params.id);

    inventario.merge(request.all());
    await inventario.save();
    return response.json("Registro editado");
  }

  /**
   * Delete a inventario with id.
   * DELETE inventarios/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    let inventario = await Inventario.find(params.id);
    inventario.delete();
    return response.json("Registro eliminado");
  }
}

module.exports = InventarioController
