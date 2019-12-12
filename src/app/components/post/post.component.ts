import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/interfaces/IPost';
import { ActivatedRoute, Router } from '@angular/router';
import { PostserviceService } from 'src/app/services/postservice.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  // public posts: Array<IPost> = []; // Datenimport der Posts aus items.json 

  public post: Observable<IPost>;
  public nextPostId: number;
  public prevPostId: number;
  public id = 1;

  constructor(private route: ActivatedRoute, private postService: PostserviceService, private router: Router) { }

  async ngOnInit() {

    this.route.paramMap.subscribe(params => {
      this.id = +params.get('id');                          // :id, die ich in app-routing.module.ts festgelegt habe
      this.post = this.postService.loadPost(this.id).pipe(
        map(post => {
          this.postService.loadPosts().subscribe(posts => {
            const myIndex = posts.findIndex(x => x.id === post.id);
            if (myIndex + 1  < posts.length){
              this.nextPostId = posts[myIndex + 1].id;
            } else if(myIndex + 1 >= posts.length){
              this.nextPostId = posts[0].id;
            }
            if (myIndex - 1 >= 0 ){
              this.prevPostId = posts[myIndex - 1].id;
            } else if (myIndex - 1 < 0){
              this.prevPostId = posts[posts.length - 1].id;
            }
          });
          return post;
        })
      );
    });
    }

  public loadPrev() {
    this.router.navigate(['image', this.prevPostId]);
    }

  public loadNext() {
    this.router.navigate(['image', this.nextPostId]);
  }
}
