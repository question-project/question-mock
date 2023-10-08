/**
 * @description: 生成统计列表
 * @author: wangqiaoling
 * @date: 2023/09/25
 */
const Mock = require('mockjs')
const Random = Mock.Random
const genComponentList = require('./genComponentList')

const getStatList = (len = 10) => {
    const res = [];
    const componentList = genComponentList()
    for (let i = 0; i < len; i++) {
        const stat = {
            _id: Random.id()
        };
        componentList.forEach(c => {
            const { fe_id, type, props } = c
            switch (type) {
                case 'questionInput':
                    stat[fe_id] = Random.ctitle();
                    break;
                case 'questionTextarea':
                    stat[fe_id] = Random.ctitle();
                    break;
                case 'questionRadio':
                    stat[fe_id] = props.options[0].text
                    break;
                case 'questionCheckbox':
                    stat[fe_id] = `${props.list[0].text}, ${props.list[1].text}`;
                    break;
                default:
                    break;
            }
        })
        // 增加各个组件的 id value
        res.push(stat);
    }
    return res;
}

module.exports = getStatList