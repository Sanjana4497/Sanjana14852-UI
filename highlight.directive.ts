import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {
  // <td [highlight]> :: yellow
  // <td [highlight]="cyan">

@Input("highlight")
color:string
  constructor(private currentElem:ElementRef) {
    this.color="yellow"
   }
   private changeBackColor(color:string){
     this.currentElem.nativeElement.style.backgroundColor=color
   }

   @HostListener("mouseenter")
   applyColorOnMouseOver(){
     this.changeBackColor(this.color)
   }

   @HostListener("mouseleave")
   removeColorOnMouseOut(){
     this.changeBackColor("")
   }




}
