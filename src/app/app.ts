import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CPU } from '../models/models';
import { CpuStore } from './Services/cpu-store';
import { AddItem } from "./add-item/add-item";
import { EditItem } from "./edit-item/edit-item";
import { ListView } from "./list-view/list-view";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AddItem, EditItem, ListView],
  templateUrl: './app.html',
  styleUrl: './app.css',  
})
export class App {
  protected title = 'CPU Storage';
  protected footer = '2025 Maid by Bohdan Lytvynov 125 Group';

  protected cpus : CPU[] = [];

  constructor(private cpuStore : CpuStore){
    this.cpuStore.MockInit();
    this.cpus = cpuStore.getCpus();
  }
}
