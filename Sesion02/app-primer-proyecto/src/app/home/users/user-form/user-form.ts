import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { IGender, IUser } from '../interfaces/user';

@Component({
  selector: 'app-user-form',
  imports: [],
  templateUrl: './user-form.html',
  styleUrl: './user-form.scss',
})
export class UserForm {
  @Output() onCreate: EventEmitter<IUser> = new EventEmitter();
  @ViewChild("nameInput") inputName!: ElementRef<HTMLInputElement>;
  @ViewChild("lastnameInput") inputLastname!: ElementRef<HTMLInputElement>;
  @ViewChild("emailInput") inputEmail!: ElementRef<HTMLInputElement>;
  @ViewChild("ageInput") inputAge!: ElementRef<HTMLInputElement>;
  name = "";
  lastname = "";
  email = "";
  age = 0;
  gender = "";

  constructor() {}

  onInputName(evt: Event) {
    this.name = (evt.target as HTMLInputElement).value;
  }

  onInputLastname(evt: Event) {
    this.lastname = (evt.target as HTMLInputElement).value;
  }

  onInputEmail(evt: Event) {
    this.email = (evt.target as HTMLInputElement).value;
  }

  onInputAge(evt: Event) {
    this.age = Number((evt.target as HTMLInputElement).value);
  }

  onInputGender(target: EventTarget) {
    this.gender = (target as HTMLInputElement).value as IGender;
  }

  onSubmit() {
    if(!this.name || !this.lastname || !this.email || !this.age) {
      alert("Por favor, completa todos los campos del formulario.");
      return;
    }

    if(this.age<=0) {
      alert("Por favor, ingresa una edad válida.");
      return;
    }



    this.onCreate.emit({ 
      name: this.name, 
      lastname: this.lastname, 
      email: this.email, 
      age: this.age, 
      gender: this.gender  as IGender 
    });
    this.reset();
  }

  reset() {
    this.name = "";
    this.lastname = "";
    this.email = "";
    this.age = 0;

    this.inputName.nativeElement.value = "";
    this.inputLastname.nativeElement.value = "";
    this.inputEmail.nativeElement.value = "";
    this.inputAge.nativeElement.value = "";
  }
}
