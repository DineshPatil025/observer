import { Component, OnInit, inject } from '@angular/core';
import { StdService } from '../../services/std.service';
import { Istd } from '../../models/std';

@Component({
  selector: 'app-std-table',
  templateUrl: './std-table.component.html',
  styleUrls: ['./std-table.component.scss']
})
export class StdTableComponent implements OnInit {

  stdArr : Array<Istd> = []
  private _stdSubService =inject(StdService) 
  constructor() { }

  ngOnInit(): void {

    this._stdSubService.stdSubjectasObs.subscribe(res => this.stdArr.push(res) )
  }

}
