import { Component } from '@angular/core';
import { Input } from "../common/input/input";
import { Converters } from '../helpers/Converters';
import { Validators } from '../helpers/Validators';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-item',
  imports: [Input, CommonModule, FormsModule],
  templateUrl: './add-item.html',
  styleUrl: './add-item.css'
})
export class AddItem {
  protected str_to_strConverter = Converters.StrToStr;
  protected str_to_numConverter = Converters.StrToNumber;

  protected text_emptyValidator = Validators.ValidateTextEmpty;

  brand : string = '';
  name : string = '';
  clock_frequency : number = 0;
}
