import { Component, OnInit, ɵINJECTOR_IMPL__POST_R3__ } from '@angular/core';
import { IImage } from 'src/app/interfaces/IImage';
import { IPost } from 'src/app/interfaces/IPost';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.css']
})
export class GridViewComponent implements OnInit {

  public posts: Array<IPost> = []; // Datenimport der Posts aus items.json 

  constructor() { }

  async ngOnInit() {

    const data = await (await fetch('/assets/items.json')).json();
    for (const post of data) {
      const newPost: IPost = {
        id: post.id,
        image: post.url,
        user: post.author,

        info: {
          tags: [],
          comments: []
        }
      }

      for (const element of post.tags) {
        newPost.info.tags.push({
          tag: element.tag
        });
      }

      for (const element of post.comments) {
        newPost.info.comments.push({
          content: element.content,
          name: element.name
        });
      }
      this.posts.push(newPost);
    }
  }
}
