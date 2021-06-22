import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Owner } from '../owners.model';
import { Router } from '@angular/router';
import { OwnersService } from '../services/owners.service';

@Component({
  selector: 'pc-createOwner',
  templateUrl: './createOwner.component.html',
  styleUrls: ['./createOwner.component.scss']
})

export class CreateOwnerComponent implements OnInit {

  constructor(public ownersService: OwnersService, public router: Router) { }

  id: any;
  firstName:any;
  lastName:any;
  petName:any;
  address:any;
  email:any;
  phoneNumber:any;


  ngOnInit(): void {
   
  }

    onSubmit(form:NgForm){
      console.log(form.value);

      let owners: Owner = {

        id: this.ownersService.allGet().length,
        firstName: form.value.firstName,
        lastName: form.value.lastName,
        petName: form.value.petName,
        address: form.value.address,
        email: form.value.email,
        phoneNumber: form.value.phoneNumber
    
      }
    
      this.ownersService.onCreate(owners);
      this.router.navigateByUrl('owners');
    }
      
      } 
    
      
    
    
    

  

