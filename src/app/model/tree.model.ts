export class TreeModel {
    constructor(
        public cid:string="code",
        public lid:string="label",
        public cnid:string="children",
        public items:any[]=null,
        public className:any=null,
        public showTitle:boolean=true,
        public treeTitle:string="",
        public treeNodeId:string="",
        public iconExpand:string="fa-plus-square",
        public iconCollapse:string="fa-minus-square",
        public iconNeutral:string="fa-square-o",
     ){
     }
}
