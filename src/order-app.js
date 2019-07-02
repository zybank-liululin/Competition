import OrderRepresentation from './output/order-representation';
import Product from './main/product'
import Member from './main/member'
import Order from './main/order'
import mockData from './main/mockData'
export default class OrderApp {
  * @param orderId            订单号
  * @param createTime         订单创建时间
  * @param memberNo           会员编号
  * @param memberName         会员姓名
  * @param oldMemberType      原会员等级
  * @param newMemberType      新会员等级。当新老等级不一致时，视为升级
  * @param memberPointsIncreased    本次消费会员新增的积分
  * @param memberPoints       会员最新的积分( = 老积分 + memberPointsIncreased)
  * @param orderItems         订单明细
  * @param totalPrice         订单总金额
  * @param discounts          优惠明细
  * @param totalDiscountPrice 优惠总金额
  * @param receivables        应收金额
  * @param payments           付款记录
  * @param discountCards      付款使用的打折券
  checkout(orderCommand) {
    // TODO: 请完成需求指定的功能
    let product = new Product()
    let member = new Member()
    let order = new Order()
    let orderId = orderCommand.orderId
    let createTime = orderCommand.createTime
    let memberNo = orderCommand.memberId
    let memberName = mockData.user[orderCommand.memberId].name
    let oldMemberType = new Member(memberNo, memberName, mockData.user[orderCommand.memberId].interal).memberLevel.levelName
    
    
    
    let newMemberType
    return (new OrderRepresentation({orderId, memberNo})).toString();
  }
}
