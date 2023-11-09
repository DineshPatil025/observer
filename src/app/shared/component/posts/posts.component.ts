import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { ObsService } from '../../services/obs.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit, OnDestroy {

intervalSub !: Subscription

private _obsService = inject(ObsService)

  constructor() { }

  ngOnInit(): void {
    // this.intervalSub = interval(1000).subscribe(res => console.log('sub of posts',res));
    this._obsService.ourInterval$.subscribe(res => console.log('count of post',res));

  }
  ngOnDestroy(): void {
    // this.intervalSub.unsubscribe()
  }

}
