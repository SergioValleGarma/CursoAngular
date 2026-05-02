import { Component, EventEmitter, Input, Output} from '@angular/core';
import { IUser } from '../interfaces/user';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { validateDomainEmail } from '../validators/imail';
import { validateLimitByGender } from '../validators/limit-by-gender';
import { errorsValidations } from '../messages/errors-validations';
import { ErrorValidations } from '../messages/error';


@Component({
  selector: 'app-user-form',
  imports: [ReactiveFormsModule, ErrorValidations],
  templateUrl: './user-form.html',
  styleUrl: './user-form.scss',
})
export class UserForm {
  @Output() onCreate: EventEmitter<IUser> = new EventEmitter();
  @Input() editUser: IUser | null = null;

  formData: IUser ={
    name: "",
    lastname: "",
    email: "",
    age: 0,
    gender: "male",
    id: -1
  };

  isEditMode = false;
  id: number | undefined ; 
  title = 'Create';

  fg!: FormGroup

  domains = [
    "example.com",
    "test.com",
    "demo.com"
  ];

  constructor() {
    this.createtForm();
  }

  private createtForm() {
    this.fg = new FormGroup({
      id: new FormControl(null),
      name: new FormControl(null, 
        [Validators.required, Validators.minLength(3)]),
      lastname: new FormControl(null, 
        [Validators.required, Validators.minLength(3)]),
      email: new FormControl(null, 
        [Validators.required, Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/),
        validateDomainEmail(this.domains)]),
      age: new FormControl(null, 
        [Validators.required,Validators.min(18), Validators.max(120)]),
      gender: new FormControl(null,Validators.required)
    }, { validators: validateLimitByGender })
  }

  public onSubmit() {
    console.log(this.fg);
  }

  public reset() {
  }

  public showError(fg: FormGroup,controlName: string, title: string): string[] {
    return errorsValidations(fg, controlName, title);    
  }

/*   private validateDomainEmail(): ValidatorFn {
    return (control: AbstractControl) => {

      if(!control || !control.value) return null;

      const email: string = control.value;
      const domain = email.substring(email.lastIndexOf('@') + 1);

      if(!this.domains.includes(domain)) return { domainInvalid: `El dominio del correo debe ser uno de los siguientes: ${this.domains.join(', ')}` }
        return null;
    
    }  
  }; */


}




