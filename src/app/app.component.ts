import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'my-app';
  id: number = 0;
  item: any;
  path: any;
  
  assetsImg: Array<object> = [
    {path: ''},
    {path: '/second'},
    {path: '/third'},
    {path: '/fourth'}
  ];

  increment() {
    this.id++;
    if(this.id >= this.assetsImg.length) {
      this.id = 0;
    }
    this.item = this.assetsImg[this.id];
    this.path = this.item.path;
  }
  decrement() {
    this.id--;
    if(this.id < 0) {
      this.id = 3;
    }
    this.item = this.assetsImg[this.id];
    this.path = this.item.path;
  }
}
