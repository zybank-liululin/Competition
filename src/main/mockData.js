const Products = {
    '001001': {
        name: '世园会五十国钱币册',
        unit: '册',
        price: '998.00',
        disMessage: {
            disWays: []
        }
    },
    '001002': {
        name: '2019北京世园会纪念银章大全40g',
        unit: '盒',
        price: '1380.00',
        disMessage: {
            disWays: ['discount'],
            proportion: 9.0
        }
    },
    '003001': {
        name: '招财进宝',
        unit: '条',
        price: '1580.00',
        disMessage: {
            disWays: ['discount'],
            proportion: 9.5
        }
    },
    '003002': {
        name: '水晶之恋',
        unit: '条',
        price: '998.00',
        disMessage: {
            disWays: ['fullNumberDisCount', 'sendMore']
        }
    },
    '002002': {
        name: '中国经典钱币套装',
        unit: '套',
        price: '998.00',
        disMessage: {
            disWays: ['fullReduction'],
            proportion: 9.5,
            fullMoney: 3000,
            disMoney: 300
        }
    },
    '002001': {
        name: '守扩之羽比翼双飞4.8g',
        unit: '条',
        price: '1080.00',
        disMessage: {
            disWays: ['fullNumberDisCount', 'sendMore']
        }
    },
    '002003': {
        name: '中国银象棋12g',
        unit: '套',
        price: '698.00',
        disMessage: {
            disWays: ['fullReduction'],
            fullMoney: 3000,
            disMoney: 300
        }
    }
}

const Members = {
    '6236609999': {
        name: '马丁',
        interal: '9860'
    },
    '6630009999': {
        name: '王立',
        interal: '48860'
    },
    '8230009999': {
        name: '李想',
        interal: '98860'
    },
    '9230009999': {
        name: '张三',
        interal: '198860'
    },
}
export {Products, Members}