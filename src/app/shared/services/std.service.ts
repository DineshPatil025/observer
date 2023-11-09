import { Injectable } from '@angular/core';
import { Istd } from '../models/std';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StdService {

  private stdSubject$: Subject<Istd> = new Subject<Istd>();
  stdSubjectasObs = this.stdSubject$.asObservable();
  constructor() {
  }

  sendStdInfo(std: Istd) {
    this.stdSubject$.next(std)
  }
}
