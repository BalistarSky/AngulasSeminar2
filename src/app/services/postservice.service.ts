import { Injectable, OnInit } from '@angular/core';
import { IPost } from '../interfaces/IPost';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostserviceService {

  private posts: Array<IPost> = [];

   constructor() {
  }


  async LoadPosts() {
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


  AddPost(post: IPost) {
    this.posts.push(post);
  }

  RemovePost(post: IPost) { 
    const index = this.posts.indexOf(post, 0); // lege Variable Index fest, gib mir den Index von post aus dem Array posts
    if (index > -1) {
      this.posts.splice(index, 1); // entferne ab dem zurückgegebenen index, 1 Element
    }
  }

  Next(post: IPost): IPost {
    let index = this.posts.indexOf(post, 0);
    index ++;
    if (index < this.posts.length) {
      return this.posts[index];
    } else {
      if (this.posts.length > 0) {
        return this.posts[0];
      } else {
        return null;
      }
    }
  }

  Previews(post: IPost) {
    let index = this.posts.indexOf(post, 0);
    index --;
    if (index > -1) {
      return this.posts[index];
    } else {
      if (this.posts.length > 0) {
        return this.posts[this.posts.length - 1];
      } else {
        return null;
      }
    }
  }

  async GetPost(id: number): Promise<IPost> {
    if (this.posts.length === 0) {
      await this.LoadPosts();
    }
    return this.posts.find(x => x.id === id);
  }
}
