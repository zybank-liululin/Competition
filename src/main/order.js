
export default class Order{
    constructor(orderNo,products,member){
        this.orderNo=orderNo;
        this.createTime=new Date();
        this.products=products;
        this.member=member;
    }
}