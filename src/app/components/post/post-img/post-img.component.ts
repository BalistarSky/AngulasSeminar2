import { Component, OnInit, Input } from '@angular/core';
import { IImage } from 'src/app/interfaces/IImage';
import { IPost } from 'src/app/interfaces/IPost';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-img',
  templateUrl: './post-img.component.html',
  styleUrls: ['./post-img.component.css']
})
export class PostImgComponent implements OnInit {

  constructor(private router: Router) { }

  @Input()
  public img: IPost;

  ngOnInit() {
  }
}
