import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testingSample';
  count:number = 10;


  showMessgae(msg:string):string{
    return msg;
  }

  increaseCount(num:number){
    this.count += num;
  }

  decreaseCount(num:number){
    this.count -= num;
  }

}
