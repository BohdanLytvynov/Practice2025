import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild, Input as ViewInput } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DOMHelper } from '../../helpers/DOMHelper'

@Component({
  selector: 'app-input',
  imports: [FormsModule, CommonModule],
  templateUrl: './input.html',
  styleUrl: './input.css',
})
export class Input implements AfterViewInit {
  isValid: boolean = false;

  error: string = 'Some error Happened!';

  

  @ViewInput() label: string = 'Please Enter Label';
  @ViewInput() containerClass: string = 'mb-3';

  @ViewInput() labelClass: string = 'form-label';
  @ViewInput() inputClass: string = 'form-control';

  @ViewInput() validClass: string = 'is-valid';
  @ViewInput() invalidClass: string = 'is-invalid';

  @ViewInput() invalidFeedbackClass: string = 'inv-feedback';
  @ViewInput() validFeedbackClass: string = 'val-feedback';
  @ViewInput() validFeedbackMsg: string = 'You are doing well!';

  @ViewInput() validator?: (
    input: any,
    error: (error: string) => void
  ) => boolean;
  @ViewInput() converter?: (
    input: string,
    error: (error: string) => void
  ) => any;

  @ViewChild('container') container!: ElementRef;

  ngAfterViewInit(): void {
    
    let input = DOMHelper.getElement(this.container.nativeElement, 'input');
    DOMHelper.AddClass(this.inputClass, input);

    input.addEventListener('keyup', (event: any) => {
      this.DoValidation(input);
    });

    input.addEventListener('change', (event: any) => {
      this.DoValidation(input);
    });

    this.DoValidation(input);
  }

  private UpdateInputView(input: any) {

    if(input == undefined) return;

    if (this.isValid) {
      DOMHelper.ReplaceClass(this.invalidClass, this.validClass, input);
    } else {
      DOMHelper.ReplaceClass(this.validClass, this.invalidClass, input);
    }
  }

  private DoValidation(input: any) {
    let value: any;

    if (this.converter != undefined) {
      value = this.converter(input.value, (err: string) => {
        this.error = err;
      });
    }

    if (this.validator != undefined) {
      this.isValid = this.validator(value, (err: string) => {
        this.error = err;
      });
    }
    else{
      this.isValid = true;
    }

    this.UpdateInputView(input);
  }
}
