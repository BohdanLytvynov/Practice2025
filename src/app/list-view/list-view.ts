import { AfterViewInit, ChangeDetectorRef, Component, EventEmitter, OnDestroy, OnInit, Output,} from '@angular/core';
import { CPU, CPU_Fields } from '../../models/models';
import { Cpu, SelctedCpuInfo } from "../cpu/cpu";
import { FormsModule } from '@angular/forms';
import { CpuStore } from '../Services/cpu-store';
import { Subscribable, Subscription } from 'rxjs';

export enum Direction{
  Asc = 0, Dsc
}

@Component({
  selector: 'app-list-view',
  imports: [Cpu, FormsModule],
  templateUrl: './list-view.html',
  styleUrl: './list-view.css'
})
export class ListView implements AfterViewInit, OnInit, OnDestroy{
  
  @Output() 
  elementSelected : EventEmitter<number> = new EventEmitter<number>();
  
  sub! : Subscription;

  cpus : CPU[] = [];

  selectedElements : boolean[] = [];

  prevSelectedIndex : number = -1;
     
  enums: string[] = [];

  selectedField : number = 0;

  searchInput : string = '';

  sortDir : Direction = Direction.Dsc;

  constructor(private cdref: ChangeDetectorRef, private cpuService : CpuStore)
  {
    this.cpus = cpuService.getCpus();
    this.selectedElements = new Array<boolean>(this.cpus.length);
  }
  ngOnInit(): void {
    this.sub = this.cpuService.onOperationCompleted$.subscribe(next => 
    {
      this.cpus = this.cpuService.getCpus();
      this.selectedElements = new Array<boolean>(this.cpus.length);
    }
    )
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
    
  ngAfterViewInit(): void {    
    this.enums = Object.keys(CPU_Fields).filter(e => isNaN(Number(e)))   
    this.cdref.detectChanges();         
  }

  onFieldSelected(value : string)
  {
    this.selectedField = Number(value);
  }

  onSortPressed()
  {
    switch(this.selectedField)
    {
      case 0://Brand
        this.SortInternal(
          (l, r) => r.brand.localeCompare(l.brand), 
          (r, l) => r.brand.localeCompare(l.brand));   
        break;
      case 1://Name
        this.SortInternal(
          (l, r) => r.name.localeCompare(l.name),
          (r, l) => r.name.localeCompare(l.name)
        );
        break;
      case 2://ClockFreequency
        this.SortInternal(
          (l, r) => r.clock_frequency - l.clock_frequency,
          (r, l) => r.clock_frequency - l.clock_frequency);
        break;
      case 3://CacheMemorySize
      this.SortInternal(
        (l, r) => r.cache_memory_size - l.cache_memory_size,
        (r, l) => r.cache_memory_size - l.cache_memory_size);
        break;
      case 4://NumberOfCores
      this.SortInternal(
        (l, r) => r.number_of_cores - l.number_of_cores,
        (r, l) => r.number_of_cores - l.number_of_cores);
        break;
      case 5://BitDepth
      this.SortInternal(
        (l, r) => r.bit_depth - l.bit_depth,
        (r, l) => r.bit_depth - l.bit_depth);
        break;
    }
  }

  onSearchInputChanged() {
    if(this.searchInput.length == 0 || this.cpus.length == 0){
      this.cpus = this.cpuService.getCpus();      
    }          
  }

  onSearchPressed()
  {        
    switch(this.selectedField)
    {
      case 0://Brand
        this.cpus = this.cpus.filter(e => e.brand === this.searchInput);
        break;
      case 1://Name
      this.cpus = this.cpus.filter(e => e.name === this.searchInput);
        break;
      case 2://ClockFreequency
        let cf : number = Number(this.searchInput);
        this.cpus = this.cpus.filter(e => e.clock_frequency == cf);
        break;
      case 3://CacheMemorySize
        let cms : number = Number(this.searchInput);
        this.cpus = this.cpus.filter(e => e.cache_memory_size == cms);
        break;
      case 4://NumberOfCores
        let nOfC : number = Number(this.searchInput);
        this.cpus = this.cpus.filter(e => e.number_of_cores == nOfC);
        break;
      case 5://BitDepth
        let bd : number = Number(this.searchInput);
        this.cpus = this.cpus.filter(e => e.bit_depth == bd);
        break;
    }
  }
  private SortInternal(
  dscSortFunc : (l : CPU, r: CPU ) => number,
  ascSortFunc : (l : CPU, r: CPU) => number)
  {
    if(this.sortDir == Direction.Dsc)
    {
      this.cpus = this.cpus.sort(dscSortFunc)
      this.sortDir = Direction.Asc;
    }
    else{
      this.cpus = this.cpus.sort(ascSortFunc)
      this.sortDir = Direction.Dsc;
    }
  }

  onElementSelected(info : SelctedCpuInfo)
  {
    if(this.prevSelectedIndex >= 0)
    {
      this.selectedElements[this.prevSelectedIndex] = false;
    }
    this.prevSelectedIndex = info.showNumber -1;

    if(this.prevSelectedIndex >= 0)
    {
      this.selectedElements[this.prevSelectedIndex] = true;
    }

    this.elementSelected.emit(info.id);    
  }
}
