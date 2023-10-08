/**
 * @description: 生成组件列表
 * @author: wangqiaoling
 * @date: 2023/09/25
 */
const Mock = require('mockjs')
const Random = Mock.Random

const genComponent = () => {
    return [
        {
            fe_id: 'c4',
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
            fe_id: 'c7',
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
            fe_id: 'c1',
            type: 'questionCheckbox',
            title: '多选',
            isHidden: false,
            isLocked: false,
            props: {
                title: '你所使用的技术栈',
                isVertical: false,
                list: [
                    { value: 'vue2', text: 'vue2', checked: false },
                    { value: 'vue3', text: 'vue3', checked: false },
                    { value: 'react', text: 'react', checked: false },
                ],
            }
        },
        {
            fe_id: 'c2',
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
            fe_id: 'c3',
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
            fe_id: 'c5',
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
            fe_id: 'c6',
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
            fe_id: 'c8',
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
};

module.exports = genComponent