const levelParam={
    integral:[10000,50000,100000],
    levelName:['普卡','金卡','白金卡','钻石卡']
};
export default class Level {
    constructor(integral){
        if(integral<levelParam.integral[0]){
            this.levelName=levelParam.levelName[0];
            this.levelTimes=1;
            return;
        }
        if(integral>=levelParam.integral[0]&&integral<levelParam.integral[1]){
            this.levelName=levelParam.levelName[1];
            this.levelTimes=1.5;
            return;
        }
        if(integral>=levelParam.integral[1]&&integral<levelParam.integral[2]){
            this.levelName=levelParam.levelName[2];
            return;
        }
        if(integral>=levelParam.integral[2]){
            this.levelName=levelParam.levelName[3];
            return;
        }
    }
};
