import { Component, OnInit, Input } from '@angular/core';
import { IImage } from 'src/app/interfaces/IImage';
import { IPost } from 'src/app/interfaces/IPost';

@Component({
  selector: 'app-grid-item',
  templateUrl: './grid-item.component.html',
  styleUrls: ['./grid-item.component.css']
})
export class GridItemComponent implements OnInit {

  @Input()  // Input()gilt nur für eine Zeile, also die nächste Klasse, bei weiteren Variablen von außen wieder verwenden um zu importieren--> metadata
  public post: IPost;
  

  constructor() { }

  ngOnInit() {
  }

}
