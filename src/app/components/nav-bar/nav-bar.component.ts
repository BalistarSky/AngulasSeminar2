import { Component, OnInit } from '@angular/core';
import { INavbarItem } from 'src/app/interfaces/INavbarItem';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
  // template: '<span>Hier könnte man direkt Html schreiben</span>'
})
export class NavBarComponent {

  public navbarItems: Array<INavbarItem> = [
    { text: 'Picular'},
    { text: 'Neu'},
    { text: 'Beliebt'},
    { text: 'Memes'},
    { text: 'Impressum'}
  ];





  public hallo = 'hallo Welt';
  public hallo2 = {
    irgendwas: 'hallo'
  };
  public eineandereVaraible = 'ein Wert';


  constructor() { }

  sayHello(){
    console.log(this.hallo);
  }
  myClick(event: MouseEvent){
    event.target;
  }
  machWas(){

  }
}
