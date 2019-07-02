import OrderRepresentation from './output/order-representation';
import Product from './main/product'
import Member from './main/member'
import Order from './main/order'
import {Products,Members} from './main/mockData'
export default class OrderApp {
  checkout(orderCommand) {
    orderCommand = JSON.parse(orderCommand)
    // TODO: 请完成需求指定的功能
    // let product = new Product()
    let member = new Member()
    let orderId = orderCommand.orderId
    let createTime =new Date(orderCommand.createTime)
    let memberNo = orderCommand.memberId
    let memberName = Members[orderCommand.memberId].name
    let oldMemberType = new Member(memberNo, memberName, Members[orderCommand.memberId].interal).memberLevel.levelName
    let order = new Order(orderId,orderCommand.items,member)
    let totalPrice=order.getTotlePrice()
    let totalDiscountPrice=order.getDiscount(orderCommand);
    let receivables=order.getNeedPay(orderCommand);
    let discountCards=orderCommand.discountCards
    let memberPointsIncreased=new Member(memberNo, memberName, Members[orderCommand.memberId].interal).payIncreaseIntegral(receivables).increaseIntegral
    let orderItems = order.getorderItems()
    let discounts = order.getDiscountItem(orderCommand)
    let newMemberType = new Member(memberNo, memberName, Members[orderCommand.memberId].interal).payIncreaseIntegral(receivables).newMemberLevel
    let memberPoints = new Member(memberNo, memberName, Members[orderCommand.memberId].interal).newIntegral
    return (new OrderRepresentation({orderId, createTime, memberNo, memberName, oldMemberType,newMemberType,memberPointsIncreased,memberPoints,orderItems,totalPrice,discounts,totalDiscountPrice,receivables,receivables,discountCards})).toString();
  }
}
