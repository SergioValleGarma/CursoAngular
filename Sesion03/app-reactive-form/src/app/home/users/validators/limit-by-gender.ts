import { AbstractControl, ValidationErrors } from "@angular/forms";

export const validateLimitByGender = (control: AbstractControl) : 
ValidationErrors | null => {
    if(!control || !control.value) return null;

    const ctrlGender = control.get('gender');
    const ctrlAge = control.get('age');

    if(!ctrlGender || !ctrlAge) return null;

    const gender = ctrlGender.value;
    const age = ctrlAge.value;

    if(gender === 'female' && age < 25) {
        return { limitByGender: 'Las mujeres deben tener al menos 25 años' }
    }

    if(gender === 'male' && age < 30) {
        return { limitByGender: 'Los hombres deben tener al menos 30 años' }
    }

    return null;
}

