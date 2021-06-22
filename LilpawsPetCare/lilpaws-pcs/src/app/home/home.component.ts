import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  //selector: 'pc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  constructor(private router: Router) {
   }
  ngOnInit(): void {
  }
    loadOwners() {
      this.router.navigate(['/owners'])
    }

    loadPets() {
      this.router.navigate(['/pets'])
    }
  
  
  }