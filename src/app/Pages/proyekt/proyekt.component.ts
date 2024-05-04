import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { Proyekt } from '../../Interfaces/proyekt';
import { Catigory } from '../../Interfaces/catigory';

@Component({
  selector: 'app-proyekt',
  templateUrl: './proyekt.component.html',
  styleUrl: './proyekt.component.scss'
})
export class ProyektComponent implements OnInit{
  projects: Proyekt[] = [];
  categories: string[] = [];

  constructor(private crudService : AuthService) {}

  ngOnInit(): void {
    this.getAllProyekts();
    this.getAllCatigories();
  }

  getAllProyekts() {
    this.crudService.getAllProyekts().subscribe({
      next: (data) => {
        this.projects = data;
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  getAllCatigories() {
    this.crudService.getAllCatigories().subscribe({
      next: (data) => {
        this.categories = data;
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
