const Mock = require('mockjs')
const Random = Mock.Random
const getQuestionList = require('./data/getQuestionList')

module.exports = [
    // 获取单个问卷信息
    {
        url: '/api/question/:id',
        method: 'get',
        response: () => {
            return {
                errno: 0,
                data: {
                    id: Random.id(),
                    title: Random.ctitle(),
                    desc: '这是问卷的描述',
                    css: '',
                    js: '',
                    // 组件列表
                    componentList: [
                        {
                            fe_id: Random.id(),
                            type: 'questionCheckbox',
                            title: '多选',
                            isHidden: false,
                            isLocked: false,
                            props: {
                                title: '多选框',
                                isVertical: false,
                                list: [
                                    { value: 'item1', text: '选项1', checked: false },
                                    { value: 'item2', text: '选项2', checked: false },
                                    { value: 'item3', text: '选项3', checked: false },
                                ],
                            }
                        },
                        {
                            fe_id: Random.id(),
                            type: 'questionRadio',
                            title: '单选',
                            isHidden: false,
                            isLocked: false,
                            props: {
                                title: '单选标题',
                                isVertical: false,
                                options: [
                                    { value: 'item1', text: '选项1' },
                                    { value: 'item2', text: '选项2' },
                                    { value: 'item3', text: '选项3' },
                                ],
                                value: '',
                            }
                        },
                        {
                            fe_id: Random.id(),
                            type: 'questionInfo',
                            title: '输入框2',
                            isHidden: false,
                            isLocked: false,
                            props: {
                                title: '问卷信息111',
                                desc: '12231231'
                            }
                        },
                        {
                            fe_id: Random.id(),
                            // 组件类型，不可重复，前后端统一
                            type: 'questionTitle',
                            title: '标题',
                            isHidden: false,
                            isLocked: false,
                            // 组件的属性
                            props: {
                                text: '个人信息调研',
                                level: 1,
                                isCenter: false
                            }
                        },
                        {
                            fe_id: Random.id(),
                            type: 'questionInput',
                            title: '输入框',
                            isHidden: false,
                            isLocked: false,
                            props: {
                                title: '你的姓名',
                                placeholder: '请输入姓名'
                            }
                        },
                        {
                            fe_id: Random.id(),
                            type: 'questionInput',
                            title: '输入框2',
                            isHidden: false,
                            isLocked: false,
                            props: {
                                title: '你的电话',
                                placeholder: '请输入电话'
                            }
                        },
                        {
                            fe_id: Random.id(),
                            type: 'questionParagraph',
                            title: '输入框2',
                            isHidden: false,
                            isLocked: false,
                            props: {
                                text: '这是来自服务端的一行段落',
                                isCenter: true
                            }
                        },
                        {
                            fe_id: Random.id(),
                            type: 'questionTextarea',
                            title: '多行输入',
                            isHidden: false,
                            isLocked: false,
                            props: {
                                title: '你的爱好',
                                placeholder: '请输入...'
                            }
                        },
                    ]
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