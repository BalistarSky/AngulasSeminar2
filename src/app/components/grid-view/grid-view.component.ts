import { Component, OnInit, ɵINJECTOR_IMPL__POST_R3__ } from '@angular/core';
import { IImage } from 'src/app/interfaces/IImage';
import { IPost } from 'src/app/interfaces/IPost';
import { ApiService } from 'src/app/services/api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.css']
})
export class GridViewComponent implements OnInit {

  public images: Observable<IPost[]>; // von Fabian, speichern Observable vom Http cient ab!


  constructor(private apiService: ApiService) { }

  async ngOnInit() {

    this.apiService.getPictures().subscribe(x => console.log(x)); // Loggen des Array --> siehe console google chrome

    this.images = this.apiService.getPictures();
  }
}
