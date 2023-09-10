/**
 * @description 生成问卷列表
 * @author wangqiaoling
 */
const Mock = require('mockjs')
const Random = Mock.Random

const getQuestionList = (params) => {
    const {len = 10, isDeleted = false, isStar = false} = params
    return new Array(len).fill({}).map(() => ({
        _id: Random.id(),
        title: Random.ctitle(),
        isStar,
        isPublished: Random.boolean(),
        answerCount: Random.natural(50, 100),
        createdAt: Random.datetime(),
        isDeleted
    }))
}

module.exports = getQuestionList