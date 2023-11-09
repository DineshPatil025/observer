import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {


  username$: Subject<string> = new Subject<string>()
  // username$: BehaviorSubject<string> = new BehaviorSubject<string>(this.username$)
  constructor() { }

}
