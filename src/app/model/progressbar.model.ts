export class ProgressbarModel {

    constructor(
        public currentValue:number=0,
        public minValue:number=0,
        public maxValue:number=100,
        public showText:boolean=false,
        public map:Map<number,string>=null,
        public incrementBy:number=10,
        public timeInSeconds:number=3,
        public progressBarClass:string="progress-bar-striped progress-bar-animated",
        public type:string="simple"
        ){}
}
