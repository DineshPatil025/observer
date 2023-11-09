import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StdService } from '../../services/std.service';

@Component({
  selector: 'app-std-form',
  templateUrl: './std-form.component.html',
  styleUrls: ['./std-form.component.scss']
})
export class StdFormComponent implements OnInit {


  stdForm !: FormGroup;

  private _stdSubService = inject(StdService)
  constructor() { }

  ngOnInit(): void {
    this.createStdForm()
  }

  createStdForm() {
    this.stdForm = new FormGroup({
      fname: new FormControl(null, [Validators.required]),
      lname: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      contact: new FormControl(null, [Validators.required]),
      date: new FormControl(null, [Validators.required])
    })
  }

  onstdAdd() {
    if (this.stdForm.valid) {
      console.log(this.stdForm.value);
      this._stdSubService.sendStdInfo(this.stdForm.value)
      this.stdForm.reset()
    }

  }

}
