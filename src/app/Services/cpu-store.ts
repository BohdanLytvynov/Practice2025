import { Injectable } from '@angular/core';
import { CPU } from '../../models/models';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CpuStore {

  private cpus : CPU[] = []

  public onOperationCompleted$ : Subject<any>;

  constructor() 
  {
    console.log("CpuStore Service Initialized...");
    this.onOperationCompleted$ = new Subject<any>();
  }

  getCpus() : CPU[]{
    return this.cpus;
  }  

  addCpu(cpu : CPU) : boolean{
    let lastId : number = -1;

    if(this.cpus.length == 0)
      lastId = 0;
    else
      lastId = this.cpus.at(this.cpus.length - 1)!.id;    

    if(lastId >= 0){
      cpu.id = lastId + 1;
      this.cpus.unshift(cpu);
      // this.onOperationCompleted$.next(undefined);
      return true;
    }    
    
    return false;
  }

  editCpu(id : number, src : CPU) : boolean
  {
    if(this.cpus.length == 0) return true;

    let cpuForEdit : CPU | undefined = this.cpus.find(i => i.id == id);

    if(cpuForEdit == undefined) return false;

    cpuForEdit.Update(src);
    this.onOperationCompleted$.next(undefined);
    return true;    
  }

  removeCpu(id : number) : boolean{
    let newArray = this.cpus.filter((e, i) => e.id != id);
    this.cpus = newArray;
    this.onOperationCompleted$.next(undefined);
    return true;
  }  

  MockInit() : void{
    this.cpus = [ 
      new CPU(
        1, 
        'Intel',
        'Intel Core I3',
        3.5,
        12,
        4,
        86        
      ),
      new CPU(
        2, 
        'Intel',
        'Intel Core I5',
        4.7,
        20,
        4,
        86
      ),
      new CPU(
        3, 
        'Intel',
        'Intel Core I7',
        5.6,
        33,
        12,
        86
      ),
      new CPU(
        4, 
        'AMD',
        'AMD Phenom',
        2.6,
        10,
        4,
        64
      ),
      new CPU(
        5, 
        'AMD',
        'AMD Phenom II',
        3.6,
        23,
        8,
        86
      )
    ];
  }
}
