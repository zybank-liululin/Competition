import Level from '../../src/main/level';
import Member from '../../src/main/member';
import assert from 'assert';
describe('Level',()=>{
    it('如果根据积分生成一个Leve对象，生成对象有正确的类型和基准倍数', async ()=>{
        let tenInteralLevel=new Level(10);
        assert.equal(tenInteralLevel.levelName,'普卡');
        assert.equal(tenInteralLevel.levelTimes,1);
    });
});
describe('Level',()=>{
    it('生成一个用户，用户有正确的类型和基准倍数', async ()=>{
        let newMember=new Member(6236609999,'马丁',9860);
        assert.equal(newMember.memberLevel.levelName,'普卡');
        assert.equal(newMember.memberLevel.levelTimes,1);
        assert.equal(newMember.payIncreaseIntegral(2).increaseIntegral,2);
    });
});