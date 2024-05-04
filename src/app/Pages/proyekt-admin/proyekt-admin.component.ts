import { Component, OnInit } from '@angular/core';
import { Proyekt } from '../../Interfaces/proyekt';
import { AuthService } from '../../Services/auth.service';
import { ProyektDTO } from '../../Interfaces/proyekt-dto';

@Component({
  selector: 'app-proyekt-admin',
  templateUrl: './proyekt-admin.component.html',
  styleUrl: './proyekt-admin.component.scss'
})
export class ProyektAdminComponent implements OnInit{
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

  isSubmitted: boolean = false;

  resultData!: ProyektDTO;

  setValue : ProyektDTO = {
    category: "",
    title: "",
    body: ""
  };

  createProyekt(data: ProyektDTO) {
    this.crudService.createProyekt(data).subscribe({
      next: (result) => {
        this.resultData = result;
        console.log(result);
        this.isSubmitted = true;
        this.getAllProyekts();
        this.getAllCatigories();
      },
      error: (err) => {
        console.log(`Error ketti: ${err}`);
      }
    });
  }

  setProyekt(){
    this.createProyekt(this.setValue);
  }
}
