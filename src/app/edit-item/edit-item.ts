import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Validators } from '../helpers/Validators';
import { CPU } from '../../models/models';
import { CpuStore } from '../Services/cpu-store';
import { FormValidator } from '../helpers/FormValidator';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-item',
  imports: [FormsModule, CommonModule],
  templateUrl: './edit-item.html',
  styleUrl: './edit-item.css'
})
export class EditItem extends FormValidator implements OnChanges {
  inputValid : boolean = false;
  
  @Input() selectedIndex : number = -1;

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
  ngOnChanges(changes: SimpleChanges): void {
    let change = changes['selectedIndex']

    let id = change.currentValue;

    let res = this.cpuStore.getCpuById(id);
    if(res != undefined)
    {
      this.brand = res.brand;
      this.name = res.name;
      this.clock_frequency = res.clock_frequency;
      this.cache_memory_size = res.cache_memory_size;
      this.number_of_cores = res.number_of_cores;
      this.bit_depth = res.bit_depth;
    }
  }
  
    onEditButtonPressed()
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
        this.cpuStore.editCpu(this.selectedIndex, cpu);
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
