import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  contentMarginTop: number = 0;
  constructor(
    private changeDetectorRef: ChangeDetectorRef
  ){ }

  ngOnInit(): void {
    
  }

  contentMarginTopHandler($event: any){
    this.contentMarginTop = $event;
    this.changeDetectorRef.detectChanges();
  }

}
