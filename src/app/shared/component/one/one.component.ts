import { Component, OnInit, inject } from '@angular/core';
import { SubjectService } from '../../services/subject.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent implements OnInit {

  username !:string;
private _unSubService = inject(SubjectService)
  constructor() { }

  ngOnInit(): void {
    this._unSubService.username$.subscribe(res => this.username =res)
  }

}
