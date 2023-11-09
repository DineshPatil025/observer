import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObsService {

  ourInterval$ = new Observable<number>(observer => {
    let count = 0;

    setInterval(() => {
      observer.next(count)
      count++
      if (count === 5) {
        observer.error('erron on count 5')
      }
    }, 1000)
  })

  skills = of('html', 'css', 'js', 'angular').pipe(map(skill => {
    return `i love ${skill}`
  }))

  constructor() { }
}
