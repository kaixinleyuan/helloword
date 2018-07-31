const val = {};

const setVal = (e) => {
  val['aa'] = e;
  console.log('我出发啦啊')
  return val
}

module.exports = {
  val,
  setVal,
}