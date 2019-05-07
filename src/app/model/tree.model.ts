export class TreeModel {
    constructor(
        public cid:string="code",
        public lid:string="label",
        public cnid:string="children",
        public items:any[]=null,
        public className:any=null
     ){
     }
}
