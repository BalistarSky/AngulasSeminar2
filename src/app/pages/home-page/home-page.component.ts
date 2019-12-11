import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/services/test.service';
import { Observable, pipe, observable } from 'rxjs';
import { take, filter, map, debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  public uhrzeit: Observable<object>

  constructor(private helloService: TestService) { } // Service injected

  public eineAndereVaraible = 'ein Wert';




  ngOnInit() {
    console.log(this.helloService.sagMalHallo());

    const myObs = new Observable<string>(obs => {   // Observable hat als Parameter eine Funktion
      obs.next('hello');
      obs.next('welt');
      obs.complete();
    });

    const meinModObs = myObs.pipe(
      filter(x => x !== 'hello'),
      debounceTime(100),
      take(3),                     // in diesem Fall, wird nur welt und irgendwas angezeigt, da next('hello') rausgefiltert
      map(nachricht => { // welt kommt als nachricht rien
        return 'Hey!' + nachricht;
      }),
      map(neueNachricht => {
        return neueNachricht.replace('!', ' ');
      })
    );

    meinModObs.subscribe(nachricht => {  // wenn ich subscribe, dann wird einmal oben alle next ausgeführt
      console.log(nachricht);
    });


    this.uhrzeit = new Observable<object>(obs => {
      setInterval(() => {
        obs.next({
          datum: new Date(Date.now()).toString(),
          uhrzeit: new Date(Date.now()).toString()
        });
      }, 1000);
    });
  }
}

// service bleiben wärend der session im webbrowser bestehen, wird einmal instanziziert
// Auslagern von Aufgaben, die ich an vielen Stellen brauche, z.B. der Zugriff auf eine API
// wenn ich Zugreifen möchten, muss ich den Service injecten --> Dependency Injection
// Services sind dazu da, Daten zu holen und zu speichern