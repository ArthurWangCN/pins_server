const { query } = require('../utils/db.js');

// 获取标签列表
async function getTags(ctx) {
  const QUERY_STR = 'id, name';
  let sql = `select ${QUERY_STR} from tag`;
  const res = await query(sql);
  ctx.body = {
    code: 200,
    msg: "查询成功",
    data: res
  };
}

// 添加标签
async function addTag(ctx) {
  const { name } = ctx.request.body;
  if (!name) {
    ctx.body = {
      code: 400,
      msg: '标签名不能为空',
      data: null
    }
  }
  try {
    let sql = `INSERT INTO tag set name='${name}'`;
    const res = await query(sql);
    ctx.body = {
      code: 200,
      msg: '添加成功',
      data: { name }
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
  getTags,
  addTag
}