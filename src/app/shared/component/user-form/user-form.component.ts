import { Component, OnInit, inject } from '@angular/core';
import { SubjectService } from '../../services/subject.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

username !:string;
private _unSubService = inject(SubjectService)
  constructor() { }

  ngOnInit(): void {
  }

  getUserName(username: HTMLInputElement){
    this.username = username.value
    this._unSubService.username$.next(this.username)
    username.value = "";
    username.focus()
    
  }

}
