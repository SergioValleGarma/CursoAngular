import { FormGroup } from "@angular/forms";

export const errorsValidations = (fg: FormGroup, controlName: string, title: string):
string[] => {
    const control = fg.get(controlName);
    if(!control || !control.errors || !control.touched) return [];

    const errors = control.errors!;
    const errorObj = Object.keys(errors);
    const errorMessages: string[] = [];

    errorObj.forEach(error => {
        switch (error) {
            case 'required':
                errorMessages.push(`El campo '${title}' es requerido.`);
                break;
            case 'minlength':
                errorMessages.push(`El campo '${title}' debe tener al menos 
                    ${errors['minlength'].requiredLength} caracteres.`);
                break;
        }
    });
    return errorMessages;
}