import mockData from './mockData'
import Product from './product'
export default class Order{
    constructor(orderNo,products,member){
        this.orderNo=orderNo;
        this.createTime=new Date();
        this.products=products;
        this.member=member;
    }
    getTotlePrice () {
        let totlePrice = 0
        this.products.forEach(element => {
            let productId = element.product
            totlePrice = totlePrice + mockData.Products[productId].price * element.amount
        });
        return totlePrice
    }
    getDiscount (orderCommand) {
        let discount = 0
        this.products.forEach(element => {
            let productId = element.product
            let productInfo = {
                proId: element.product,
                unit: mockData.Products[productId].unit,
                price: mockData.Products[productId].price,
                disMessage: mockData.Products[productId].disMessage
            }
            const product = new Product(productInfo)
            let haveDisCard = orderCommand.discountCards.length == 0 ? false: true 
            discount = discount + product.getMostDisCount(2, haveDisCard)
        });
    }
    getNeedPay (orderCommand) {
        return this.getTotlePrice() - this.getDiscount(orderCommand)
    }
}