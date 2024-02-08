import { AbstractControl } from "@angular/forms";

export function firstCharUppercaseValidator(control: AbstractControl) {
  const value = control.value as string;
  if (value !== '' && value.charAt(0) !== value.charAt(0).toUpperCase()) {
    return { uppercase: true };
  }
  return null;
}
