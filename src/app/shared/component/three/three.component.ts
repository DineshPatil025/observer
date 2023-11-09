import { Component, OnInit, inject } from '@angular/core';
import { SubjectService } from '../../services/subject.service';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.scss']
})
export class ThreeComponent implements OnInit {

  username !: string;
  private _unSubService = inject(SubjectService)
  constructor() { }

  ngOnInit(): void {

    this._unSubService.username$.subscribe(res => this.username = res)
  }

}
