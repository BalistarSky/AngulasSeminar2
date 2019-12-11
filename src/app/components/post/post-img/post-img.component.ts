import { Component, OnInit, Input } from '@angular/core';
import { IImage } from 'src/app/interfaces/IImage';
import { IPost } from 'src/app/interfaces/IPost';

@Component({
  selector: 'app-post-img',
  templateUrl: './post-img.component.html',
  styleUrls: ['./post-img.component.css']
})
export class PostImgComponent implements OnInit {

  constructor() { }

  @Input()
  public img: IPost;

  ngOnInit() {
  }




  
}
