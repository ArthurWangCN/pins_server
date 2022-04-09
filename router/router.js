const Router = require('koa-router');
const { getPins, addPin, deletePin } = require('../service/pin.js');
const { getTags, addTag } = require('../service/tag.js');

const router = new Router({
  prefix: '/api'
});

router.get('/getPins', async (ctx) => getPins(ctx));
router.post('/addPin', async (ctx) => addPin(ctx));
router.post('/deletePin', async (ctx) => deletePin(ctx));

router.get('/getTags', async (ctx) => getTags(ctx));
router.post('/addTag', async (ctx) => addTag(ctx));

module.exports = router;