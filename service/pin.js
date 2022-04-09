const { query } = require('../utils/db.js');

// 获取收藏列表
async function getPins(ctx) {
  const QUERY_STR = 'id, name, tag_id, url';
  let sql = `select ${QUERY_STR} from pin`;
  const res = await query(sql);
  ctx.body = {
    code: 200,
    msg: "查询成功",
    data: res
  };
}

// 添加收藏
async function addPin(ctx) {
  const { name="链接", tag_id=0, url } = ctx.request.body;
  if (!url) {
    ctx.body = {
      code: 400,
      msg: 'url字段不能为空',
      data: null
    }
  }
  try {
    let sql = `INSERT INTO pin set name='${name}', tag_id=${tag_id}, url='${url}'`;
    const res = await query(sql);
    ctx.body = {
      code: 200,
      msg: '添加成功',
      data: { name, tag_id, url }
    }
  } catch (error) {
    ctx.body = {
      code: 500,
      msg: '系统错误',
      data: error
    }
  }
}

// 删除收藏
async function deletePin(ctx) {
  const { id } = ctx.request.body;
  if (!id) {
    ctx.body = {
      code: 400,
      msg: 'id字段不能为空',
      data: null
    }
  }
  try {
    let sql = `delete from pin where id='${id}'`;
    const res = await query(sql);
    ctx.body = {
      code: 200,
      msg: '删除成功',
      data: null
    }
  } catch (error) {
    ctx.body = {
      code: 500,
      msg: '系统错误',
      data: error
    }
  }
}

module.exports = {
  getPins,
  addPin,
  deletePin
}
