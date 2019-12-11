import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/interfaces/IPost';
import { ActivatedRoute, Router } from '@angular/router';
import { PostserviceService } from 'src/app/services/postservice.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  //public posts: Array<IPost> = []; // Datenimport der Posts aus items.json 

  public post: IPost =;
  public id = 1;

  constructor(private route: ActivatedRoute, private postService: PostserviceService, private router: Router) { }

  async ngOnInit() {

    this.route.paramMap.subscribe(async params => {
      this.id = +params.get('id');
      this.post = await this.postService.GetPost(this.id);
    });


  }

  public loadPrev() {
    let post = this.postService.Previews(this.post);
    this.router.navigate(['image', post.id]);
  }

  public loadNext() {
    let post = this.postService.Next(this.post);
    this.router.navigate(['image', post.id]);
  }

}
