import { Component, input } from '@angular/core';
import { Converters } from '../helpers/Converters';
import { Validators } from '../helpers/Validators';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CPU } from '../../models/models';
import { CpuStore } from '../Services/cpu-store';
import { FormValidator } from '../helpers/FormValidator';

@Component({
  selector: 'app-add-item',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-item.html',
  styleUrl: './add-item.css',
})
export class AddItem extends FormValidator{
  inputValid : boolean = false;

  brand: string = '';
  name: string = '';
  clock_frequency: number = 0;
  cache_memory_size: number = 0;
  number_of_cores: number = 0;
  bit_depth: number = 0; 
   
constructor(private cpuStore : CpuStore)
{
  super(6);
}

  onAddButtonPressed()
  {
    if(!this.inputValid) return;
    let cpu : CPU = new CPU(-1,
      this.brand, 
      this.name, 
      this.clock_frequency, 
      this.cache_memory_size, 
      this.number_of_cores, 
      this.bit_depth);

    try {
      this.cpuStore.addCpu(cpu);
    } catch (error : any) {
      alert(`Unable to add Item! Error: ${error.message}`);
    }
  }

  onClearButtonPressed()
  {
    this.brand = '';
    this.name = '';
    this.clock_frequency = NaN;
    this.cache_memory_size = NaN;
    this.number_of_cores = NaN;
    this.bit_depth = NaN;

    super.resetValidarray(0, 6);
  }

  onBrandChanged(event : any)
  {
    super.setValue(0, Validators.ValidateTextEmpty(String(event)))

    this.inputValid = super.CheckValidArray(0, 6);
  }

  onNameChanged(event : any)
  {
    super.setValue(1, Validators.ValidateTextEmpty(String(event)))

    this.inputValid = super.CheckValidArray(0, 6);
  }

  onClockFrequencyChanged(event : any)
  {
    super.setValue(2, Validators.ValidateNumberGreaterThenZero(Number(event)))

    this.inputValid = super.CheckValidArray(0, 6);
  }

  
  onCacheMemorySizeChanged(event : any)
  {
    super.setValue(3, Validators.ValidateNumberGreaterThenZero(Number(event)))

    this.inputValid = super.CheckValidArray(0, 6);
  }

  onNumberOfCoresChanged(event : any)
  {
    super.setValue(4, Validators.ValidateNumberGreaterThenZero(Number(event)))

    this.inputValid = super.CheckValidArray(0, 6);
  }

  onBitDepthChanged(event : any)
  {
    super.setValue(5, Validators.ValidateNumberGreaterThenZero(Number(event)))

    this.inputValid = super.CheckValidArray(0, 6);
  }

}
