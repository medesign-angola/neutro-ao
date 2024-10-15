import { Directive, HostListener } from "@angular/core";

@Directive()
export class DevToolsDisabling{
    
  @HostListener('contextmenu', ['$event']) onrightMouseClick($event: any){
    return false; 
  }

  private ctrlShiftKey(e: any, keyCode: any):boolean {
    return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
  }

  @HostListener('window:keydown', ['$event']) onKeyDown(e: any){
    // Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
    if (
        e.keyCode === 123 ||
        this.ctrlShiftKey(e, 'I') ||
        this.ctrlShiftKey(e, 'J') ||
        this.ctrlShiftKey(e, 'C') ||
        (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
    ){
        return true;
    } else {
        return true;
    }
  }

}