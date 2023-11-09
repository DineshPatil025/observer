import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {

  intervalSub !: Subscription;

  constructor() { }

  ngOnInit(): void {
    // this.intervalSub = interval(1000).subscribe(res => console.log('sub of users', res));

  }
  ngOnDestroy(): void {
    // this.intervalSub.unsubscribe()
  }

}
