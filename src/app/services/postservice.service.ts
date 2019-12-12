import { Injectable, OnInit } from '@angular/core';
import { IPost } from '../interfaces/IPost';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostserviceService {

  constructor(private api: ApiService) { }

  loadPost(id: number) {
    return this.api.getPictures().pipe(
      map(posts => {
        return posts.find(x => x.id === id);
      })
    );
  }

  loadPosts() {
    return this.api.getPictures();
  }
}
