const router = require("express").Router()
const authRouter = require('./auth.router')
// const ordersRouter = require('./orders.router')
// const productsRouter = require('./products.router')
// const storesRouter = require('./stores.router')
// const transfersRouter = require('./transfers.router')
const usersRouter = require('./users.router')
router.use('/auth', authRouter)
router.use('/test', () => {console.log('router enchufado')})
router.use('/users', usersRouter)
module.exports = router