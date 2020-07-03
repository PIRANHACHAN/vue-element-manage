const Mock = require('mockjs')

const Random = Mock.Random

const tableData = function() {
  let tabList = []
  for (let i = 0; i < 5; i++) {
    let newTabListObj = {
      date: Random.date(),
      name: Random.cname(),
      address: Random.county(true),
      tag: Random.pick('家', '公司'),
    }
    tabList.push(newTabListObj)
  }
  return tabList
}

Mock.mock('/mock/tabls', tableData)
