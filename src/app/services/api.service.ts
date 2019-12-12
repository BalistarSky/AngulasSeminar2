import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';  // ab hier manuell einbinden
import { IPost } from '../interfaces/IPost';
import { HttpClient } from '@angular/common/http'; // aufpassen!

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) {  }

  public getPictures(): Observable<IPost[]> {
    return this.httpClient.get<IPost[]>('../assets/items.json'); // auf welches Interface soll Ergebnis gemappt werden
    // Erwarten, dass Rückgabe von Request ein IPost ist, daher Angabe als generischer Type
  }

  /*
  async GetPost(id: number): Promise<IPost> {
    if (this.posts.length === 0) {
      await this.LoadPosts();
    }
    return this.posts.find(x => x.id === id);
  }*/
}
