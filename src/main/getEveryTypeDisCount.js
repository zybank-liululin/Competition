export default class disWaysObject  {
    fullReduction (price, number, disMessage) {
        let totle = price * number
        return parseInt(totle / disMessage.fullMoney) * disMessage.disMoney
    }
    discount (price, number, disMessage) {
        return (1 - disMessage.proportion) * price * number
    }
    fullNumberDisCount (price, number) {
        if (number >= 3) {
            return 0.5*price*number
        }
    }
    sendMore (price, number) {
        if (number >= 4) {
            return price
        }
    }
}