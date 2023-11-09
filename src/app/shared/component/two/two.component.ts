import { Component, OnInit, inject } from '@angular/core';
import { SubjectService } from '../../services/subject.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.scss']
})
export class TwoComponent implements OnInit {

  username !: string;
  private _unSubService = inject(SubjectService)
  constructor() { }

  ngOnInit(): void {
this._unSubService.username$.subscribe(res=> this.username = res)

  }

}
