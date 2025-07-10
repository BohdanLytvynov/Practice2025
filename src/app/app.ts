import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CPU } from '../models/models';
import { CpuStore } from './Services/cpu-store';
import { AddItem } from "./add-item/add-item";
import { EditItem } from "./edit-item/edit-item";
import { ListView } from "./list-view/list-view";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AddItem, EditItem, ListView, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',  
})
export class App {
  protected title = 'CPU Storage';
  protected footer = '2025 Maid by Bohdan Lytvynov 125 Group';

  protected cpus : CPU[] = [];

  selectedIndex : number = -1;
  canEditDelete : boolean = false;
  
  constructor(private cpuStore : CpuStore){
    this.cpuStore.MockInit();
    this.cpus = cpuStore.getCpus();
  }

  onSelectItem(id : number)
  {
    this.selectedIndex = id;
    this.canEditDelete = this.selectedIndex >= 0;
  }

  onDeleteButtonPressed()
  {
    if(!this.canEditDelete) return;

    try {
      this.cpuStore.removeCpu(this.selectedIndex);
    } catch (error : any) {
      alert(`Unable to Remove Item! Error: ${error.message}`);
    }
  }
}
