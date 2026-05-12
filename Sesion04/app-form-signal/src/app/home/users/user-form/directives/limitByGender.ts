import { Directive } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";

@Directive({
    selector: '[limitByGender]',
    providers:[
        {
            provide: NG_VALIDATORS,
            useExisting: LimitByGender,
            multi: true,
        },
    ],
})

export class LimitByGender implements Validator {
    validate(control: AbstractControl): ValidationErrors | null {
        if (!control) return null;

        const ctrlGender = control.get('gender');
        const ctrlAge = control.get('age');

        if (!ctrlGender || !ctrlAge?.value) return null;
        if (!ctrlAge || !ctrlGender?.value) return null;

        if (ctrlGender.value === 'male' && ctrlAge.value < 40) 
            return { limitByGender: `Male users must be at least 40 years old. Current age: ${ctrlAge.value}` };

        if (ctrlGender.value === 'female' && ctrlAge.value < 25)
            return { limitByGender: `Female users must be at least 25 years old. Current age: ${ctrlAge.value}` };

        return null;
    }
}
