import {Products,Members} from './mockData'
import { Product } from './product'
import OrderItem from '../output/order-item'
import DiscountItem from '../output/discount-item'
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
            totlePrice = totlePrice + Products[productId].price * element.amount
        });
        return totlePrice
    }
    getDiscount (orderCommand) {
        let discount = 0
        this.products.forEach(element => {
            let productId = element.product
            let productInfo = {
                proId: element.product,
                unit: Products[productId].unit,
                price: Products[productId].price,
                disMessage: Products[productId].disMessage
            }
            const product = new Product(productInfo)
            let haveDisCard = orderCommand.discountCards.length == 0 ? false: true 
            discount = discount + product.getMostDisCount(2, haveDisCard)
        });
    }
    getNeedPay (orderCommand) {
        return this.getTotlePrice() - this.getDiscount(orderCommand)
    }
    getorderItems(){
        let orderItems=new Array()
        this.products.forEach((element)=>{
            let productId = element.product
            let orderItem=new OrderItem(productId,Products[productId].name,Products[productId].price,element.amount,element.amount*Products[productId].price)
            orderItems.push(orderItem)
        })
        return orderItems
    }
    getDiscountItem (orderCommand) {
        let getDiscountItems = new Array()
        this.products.forEach(element => {
            let productId = element.product
            let productInfo = {
                proId: element.product,
                unit: Products[productId].unit,
                price: Products[productId].price,
                disMessage: Products[productId].disMessage
            }
            const product = new Product(productInfo)
            let haveDisCard = orderCommand.discountCards.length == 0 ? false: true 
            let temp = product.getMostDisCount(2, haveDisCard)
            let discountItem = new DiscountItem(productId, Products[productId].name, temp)
            getDiscountItems.push(discountItem)
        });
    }
}