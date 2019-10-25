'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome');

Route.post('index','ProductoController.create');
Route.get('inicio','ProductoController.index');
Route.get('mostrar/:id','ProductoController.show');
Route.post('editar/:id','ProductoController.edit');
Route.delete('eliminar/:id','ProductoController.destroy');

Route.post('crearInventario','InventarioController.create');
Route.get('inicioInventario','InventarioController.index');
Route.get('mostrarInventario/:id','InventarioController.show');
Route.post('editarInventario/:id','InventarioController.edit');
Route.delete('eliminarInventario/:id','InventarioController.destroy');