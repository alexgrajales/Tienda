import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ErrorStateMatcher } from "@angular/material";
import { FormControl, FormGroupDirective, NgForm, Validator  } from "@angular/forms";
import { Validators } from "@angular/forms";


export class FormErrorStateMatcher implements ErrorStateMatcher{
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean{
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || isSubmitted));
  }
}

@Component({
  selector: 'app-auth-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() onsubmit = new EventEmitter<any>();
  @Input() btnText: string;

  emailFormControl = new FormControl('',[
    Validators.required,
    Validators.email
    
  ]);

  passwordFormControl = new FormControl('',[
    Validators.required,    
    
  ]);

  matche = new FormErrorStateMatcher();

  constructor() { }

  ngOnInit() {
  }

  submit(email, password){
    this.onsubmit.emit({email, password});
  }

}
