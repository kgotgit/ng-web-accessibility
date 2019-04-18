import { Component, OnInit, Input, EventEmitter, Output, ElementRef, ViewChild, ViewChildren, AfterViewInit, QueryList, Renderer2 } from '@angular/core';
import { rendererTypeName } from '@angular/compiler';


@Component({
    selector: 'app-filterlistbox',
    templateUrl: './filterlistbox.component.html',
    styleUrls: ['./filterlistbox.component.scss']
})
export class FilterlistboxComponent implements OnInit, AfterViewInit {
    @ViewChildren("option") options: QueryList<ElementRef>;
    @Input("itemsMap") itemsMap: Map<string, any>;
    @Input("label") label: string;
    @Input("code") code: string;
    @Input("componentId") cid: string;
    @Input("listName") listName: string;
    @Output() onKeyWordChange = new EventEmitter<Object>();
    @Output() itemStateChanged = new EventEmitter<Object>();
    @Input("showDelete") showDelete: boolean;
    @Output() onDeleteClicked = new EventEmitter<string>();
    search: string;
    activedescendentItem: string = null;


    constructor(private renderer: Renderer2) { }

    ngOnInit() {

    }
    ngAfterViewInit(): void {

    }
    /**
     * Event to capture when an item is selected
     * @param $event 
     * @param item 
     */
    onSelect($event, item: any) {
        item.value.selected = item.value.selected == true ? false : true;
        this.activedescendentItem = $event.currentTarget.id;
        this.updateCurrentActiveDescendant();
        this.itemStateChanged.emit({ "componentId": this.cid, "item": item });
    }

    /**
     * This method is primarily used to update the current active descendant element so that 
     */
    updateCurrentActiveDescendant() {
        this.options.forEach((eleRef: ElementRef) => {
            if (eleRef.nativeElement.id === this.activedescendentItem) {
                this.renderer.setAttribute(eleRef.nativeElement, 'data-activedesendent', 'true');
            } else {
                this.renderer.setAttribute(eleRef.nativeElement, 'data-activedesendent', 'false');
            }
        });
    }
    /**
     * Enable keyboard accessibility via listening to key down event
     * @param $event 
     */
    onKeydown($event: any) {

        switch ($event.which) {
            case 40://Down Arrow
                this.executeArrowDown($event);
                break;

            case 38:// Up Arrow
                this.executeUpArrow($event);
                break;

            case 32:// Spacebar
                this.selectOption($event);
        }
    }

    /**
     * Function executes logic associated to keydown event
     * @param $event 
     */
    executeArrowDown($event: any) {
        $event.preventDefault();
        if (typeof this.activedescendentItem != "undefined" && this.activedescendentItem) {
            this.options.some((eleRef: ElementRef, index: number, optionsarray: ElementRef[]) => {
                if (eleRef.nativeElement.id === this.activedescendentItem) {
                    index = (index < optionsarray.length - 1) ? index : -1;
                    this.renderer.setAttribute(eleRef.nativeElement, 'data-activedesendent', 'false');
                    this.renderer.setAttribute(optionsarray[index + 1].nativeElement, 'data-activedesendent', 'true')
                    this.activedescendentItem = optionsarray[index + 1].nativeElement.id;
                    optionsarray[index + 1].nativeElement.scrollIntoView();
                    return true;
                }
            });
        } else {
            this.options.some((eleRef: ElementRef, index: number, optionsarray: ElementRef[]) => {
                if (index == 0) {
                    this.renderer.setAttribute(optionsarray[index].nativeElement, 'data-activedesendent', 'true')
                    this.activedescendentItem = optionsarray[index].nativeElement.id;
                    optionsarray[index].nativeElement.scrollIntoView();
                    return true;
                }
            });
        }
    }

    /**
     * execute
     * @param $event 
     */
    executeUpArrow($event: any) {
        $event.preventDefault();
        if (typeof this.activedescendentItem != "undefined" && this.activedescendentItem) {
            this.options.some((eleRef: ElementRef, index: number, optionsarray: ElementRef[]) => {
                if (eleRef.nativeElement.id === this.activedescendentItem) {
                    index = (index > 0 && index <= optionsarray.length - 1) ? index : optionsarray.length;
                    this.renderer.setAttribute(eleRef.nativeElement, 'data-activedesendent', 'false');
                    this.renderer.setAttribute(optionsarray[index - 1].nativeElement, 'data-activedesendent', 'true')
                    this.activedescendentItem = optionsarray[index - 1].nativeElement.id;
                    optionsarray[index - 1].nativeElement.scrollIntoView();
                    return true;
                }
            });
        } else {
            this.options.some((eleRef: ElementRef, index: number, optionsarray: ElementRef[]) => {
                this.renderer.setAttribute(optionsarray[optionsarray.length - 1].nativeElement, 'data-activedesendent', 'true')
                this.activedescendentItem = optionsarray[optionsarray.length - 1].nativeElement.id;
                optionsarray[optionsarray.length - 1].nativeElement.scrollIntoView();
                return true;
            });
        }
    }
    /**
     * 
     * @param $event 
     */
    selectOption($event: any) {
        if (typeof this.activedescendentItem != "undefined" && this.activedescendentItem) {
            this.options.some((eleRef: ElementRef, index: number, optionsarray: ElementRef[]) => {
                if (eleRef.nativeElement.id === this.activedescendentItem) {
                    let code = eleRef.nativeElement.getAttribute("data-code");
                    let item = this.itemsMap.get(code);
                    item.selected = (item.selected) ? false : true;
                    this.itemsMap.set(code, item);
                    return true;
                }
            });
        }



    }

}




