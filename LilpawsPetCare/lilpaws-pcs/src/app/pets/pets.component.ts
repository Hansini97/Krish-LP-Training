import { Component, OnInit } from '@angular/core';
import pets from './data/pets.json';

@Component({
  selector: 'pc-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss']
})
export class PetsComponent implements OnInit {

  title: string = 'Pet Care System - Pets'
  pets: any[] = pets;
  filteredpets:any[] = pets;
  showIcon: boolean = false;
  private _nameFilter: string = '';
  
  set nameFilter(value: string){
    this._nameFilter = value;
    this.filterByName();
  }

  get nameFilter(): string{
    return this._nameFilter;
  }

  constructor() { }

  ngOnInit(): void {
  }

  toggleIcon(){
    this.showIcon = !this.showIcon;
  }

  filterByName(){
    this.filteredpets = this.pets.filter(pet =>pet.name.includes(this.nameFilter))
  }

  delete(id: string){
    for(let i = 0; i < this.pets.length; ++i){
      if(this.pets[i].id === id){
        this.pets.splice(i,1);
      }
    }
  }


}
