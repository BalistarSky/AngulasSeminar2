import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css']
})
export class PostPageComponent implements OnInit, OnDestroy {

  public imageId: number;
  private paramSub: Subscription;


  constructor(private route: ActivatedRoute) { }  // Hinzufügen des Service


  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.imageId = +params.get('id');           // + wandelt string in number um, da id: number
    });
  }

  /*
  ngOnInit() {
    this.route.paramMap.subscribe(
      function(params) {
        this.imageId = +params.get('id');           // + wandelt string in number um, da id: number
      }
    );
  }
*/

  ngOnDestroy(): void {
    this.paramSub.unsubscribe();
  }

}
