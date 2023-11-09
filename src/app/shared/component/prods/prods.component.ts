import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { ObsService } from '../../services/obs.service';

@Component({
  selector: 'app-prods',
  templateUrl: './prods.component.html',
  styleUrls: ['./prods.component.scss']
})
export class ProdsComponent implements OnInit, OnDestroy {
skills : any = [];
intervalSub !: Subscription


private _obsService = inject(ObsService)
  constructor() { }

  ngOnInit(): void {

  //  this.intervalSub =  interval(1000).subscribe(res => console.log('sub of prod',res));
  this._obsService.skills.subscribe(skill => {
    console.log(skill);
    this.skills.push(skill)
    console.log(this.skills);
    
  }
    );
  }

  ngOnDestroy(): void {
    // this.intervalSub.unsubscribe();
  }

}
