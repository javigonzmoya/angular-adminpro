import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnInit, OnDestroy {

  intervalSubs: Subscription;

  constructor() { }

  ngOnInit(): void {


    /*this.retornaObservable()
    .pipe(
      retry(1)
    )
    .subscribe( 
      valor => console.log('sub:', valor),
      error => console.warn('error:', error),
      () => console.log('obs Terminado')
    )*/
    this.intervalSubs = this.retornaIntervalo()
      .subscribe(console.log)// = (val) => console.log(val)

  }

  retornaIntervalo(): Observable<number> {

    return interval(500)
            .pipe(
              map( val => val + 1 ),
              filter( val => val % 2 === 0 ),
              //take(10) -n veces 
            )
  }

  retornaObservable(){
    let i = -1;

    const obs$ = new Observable<number>( observer =>{
      const intervalo = setInterval(()=>{
        i++;
        observer.next(i)
        if( i === 4){
          clearInterval(intervalo)
          observer.complete()
        }

        if( i === 2){
          observer.error('I llego a 2')
        }
      }, 1000)
    })

    return obs$;
  }

  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe()
  }

}
