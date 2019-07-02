import disWaysObject from './getEveryTypeDisCount.js'
export class Product {
    constructor (productInfo) {
        this.proId = productInfo.proId,
        this.unit = productInfo.unit,
        this.price = productInfo.price,
        this.disMessage = productInfo.disMessage
    }

    getMostDisCount (number, haveDisCard) {
        let mostDisCount = 0
        let disWays = new disWaysObject()
        this.disMessage.disWays.forEach(element => {
            if (!haveDisCard && element === 'discount' ) return;
            let tempDisCount = disWays[element](this.price, number, this.disMessage)
            mostDisCount =  mostDisCount < tempDisCount ? tempDisCount : mostDisCount
        });
        return mostDisCount
    }
}