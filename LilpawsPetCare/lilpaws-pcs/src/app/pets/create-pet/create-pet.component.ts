import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Pet } from '../pets.model';
import { Router } from '@angular/router';
import { PetsService } from '../services/pets.service';
//import { OwnersService } from '../services/owners.service';


@Component({
  selector: 'pc-create-pet',
  templateUrl: './create-pet.component.html',
  styleUrls: ['./create-pet.component.scss']
})
export class CreatePetComponent implements OnInit {

  constructor(public petsService: PetsService, public router: Router) { }

  id: any;
  type:any;
  breed:any;
  name:any;
  age:any;
  ownerName:any;


  ngOnInit(): void {
   
  }

    onSubmit(form:NgForm){
      console.log(form.value);

      let pets: Pet = {

        id: this.petsService.allGet().length,
        type: form.value.type,
        breed: form.value.breed,
        name: form.value.name,
        age: form.value.age,
        ownerName: form.value.ownerName
    
      }
    
      this.petsService.onCreate(pets);
      this.router.navigateByUrl('pets');
    }
      
      } 
    
      
    
    
    

  

