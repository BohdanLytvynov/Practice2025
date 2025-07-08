import { Component, Input } from '@angular/core';
import { CPU } from '../../models/models';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-cpu',
  imports: [],
  templateUrl: './cpu.html',
  styleUrl: './cpu.css'
})
export class Cpu {
  @Input() data : CPU = CPU.Init();
  @Input() showNumber : number = 0;  
}
