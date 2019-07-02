import assert from 'assert';
import { Product } from '../../src/main/product.js'


describe('OrderRepresentation', () => {
    it('当设置产品价格为4000，优惠方案为满3000减200或者95折，用户有95折券时，用户买了两件，计算最大优惠方案应该节省金额为600', async () => {
        let productInfo = {
            proId: '1',
            unit: '个',
            price: '4000',
            disMessage: {
                disWays: ['fullReduction', 'discount'],
                proportion: 9.5,
                fullMoney: 3000,
                disMoney: 300
            }
        }
        const product = new Product(productInfo)
        assert.equal(product.getMostDisCount(2, true), 600);
    })
});
