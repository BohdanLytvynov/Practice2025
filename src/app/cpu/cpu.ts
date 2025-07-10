import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { CPU } from '../../models/models';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

export type SelctedCpuInfo = {id: number, showNumber : number}

@Component({
  selector: 'app-cpu',
  imports: [CommonModule],
  templateUrl: './cpu.html',
  styleUrl: './cpu.css'
})
export class Cpu implements AfterViewInit {
@ViewChild('container') container! : ElementRef;

  @Input() isSelected : boolean = false;

  ngAfterViewInit(): void {
    this.container.nativeElement.addEventListener('click', (e : any) => {
      this.selected.emit({id : this.data.id, showNumber: this.showNumber});
    })
  }
  @Input() data : CPU = CPU.Init();
  @Input() showNumber : number = 0;  

  @Output() selected : EventEmitter<SelctedCpuInfo> = new EventEmitter<SelctedCpuInfo>();  


}
