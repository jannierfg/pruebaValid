import { AbstractControl, ValidationErrors, Validator, NgModel, NG_VALIDATORS } from '@angular/forms'
import { Directive, Input, OnDestroy } from '@angular/core'

@Directive({
  selector: '[fieldmatches]',
  providers:[
  ]
})
export class FieldmatchesDirective implements Validator, OnDestroy {

  @Input('fieldmatches')
  fieldmatches:NgModel

  constructor() { }

  public validate(c: AbstractControl): ValidationErrors | null {
    return null
  }

  public registerOnValidatorChange(fn: () => void): void {
    // this.fieldmatches.valueChanges
  }

  ngOnDestroy(){

  }
}
