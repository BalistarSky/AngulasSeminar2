import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-suchleiste',
  templateUrl: './suchleiste.component.html',
  styleUrls: ['./suchleiste.component.css']
})
export class SuchleisteComponent implements OnInit {

  constructor() { }

  @Input()
  public supiVariable: string; // spassvariable

  ngOnInit() {
  }


}
