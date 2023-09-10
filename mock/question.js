const Mock = require('mockjs')
const Random = Mock.Random
const getQuestionList = require('./data/getQuestionList')

module.exports = [
    {
        url: '/api/question/:id',
        method: 'get',
        response: () => {
            return {
                errno: 0,
                data: {
                    id: Random.id(),
                    title:Random.ctitle()
                }
            }
        }
    },
    // 创建问卷
    {
        url: '/api/question',
        method: 'post',
        response: () => {
            return {
                errno: 0,
                data: {
                    id: Random.id(),
                }
            }
        }
    },
    // 获取 or 查询问卷列表
    {
        url: '/api/question',
        method: 'get',
        response: (ctx) => {
            const {url = '', query = {}} = ctx
            const isDeleted = url.indexOf('isDeleted=true') >= 0
            const isStar = url.indexOf('isStar=true') >= 0
            const pageSize = parseInt(query.pageSize, 10) || 10

            return {
                errno: 0,
                data: {
                    // 当前页面数据
                    list: getQuestionList({isStar, isDeleted, len: pageSize}),
                    total: 100
                }
            }
        }
    },
    // 更新问卷
    {
        url: '/api/question/:id',
        method: 'patch',
        response: (ctx) => {
            return {
                errno: 0
            }
        }
    },
    // 复制问卷
    {
        url: '/api/question/duplicate/:id',
        method: 'post',
        response: () => {
            return {
                errno: 0,
                data: {
                    id: Random.id()
                }
            }
        }
    },
    // 批量彻底删除
    {
        url: '/api/question',
        method: 'delete',
        response: () => {
            return {
                errno: 0
            }
        }
    }
]