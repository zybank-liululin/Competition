import Level from './level';
export default class Member{
    constructor(memberId,memberName,memberIntegral){
        this.memberId=memberId;
        this.memberName=memberName;
        this.memberIntegral=memberIntegral;
        this.memberLevel=new Level( this.memberIntegral);
    }
    payIncreaseIntegral(totalPrice){
        let increaseIntegral=totalPrice*this.memberLevel.levelTimes;
        this.memberIntegral=this.memberIntegral+increaseIntegral;
        this.memberLevel=new Level(this.memberIntegral);
        return {
            increaseIntegral:increaseIntegral,
            newMemberLevel:this.memberLevel.levelName,
            newIntegral:this.memberIntegra
        };
    } 
};
