const Router = require('koa-router');
const { getPins, addPin } = require('../service/pin.js');

const router = new Router({
  prefix: '/api'
});

router.get('/getPins', async (ctx) => getPins(ctx));
router.post('/addPin', async (ctx) => addPin(ctx))



module.exports = router;