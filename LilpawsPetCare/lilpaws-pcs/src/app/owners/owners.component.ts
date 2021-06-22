import { Component, OnInit } from '@angular/core';
import owners from './data/owners.json';


@Component({
  selector: 'pc-owners',
  templateUrl: './owners.component.html',
  styleUrls: ['./owners.component.scss']
})
export class OwnersComponent implements OnInit {

  title: string = 'Pet Care System - Owners'
  owners: any[]=owners;
  filteredowners:any[]=owners;
  showIcon: boolean = false;
  private _addressFilter: string = '';
  
  set addressFilter(value: string){
    this._addressFilter = value;
    this.filterByAddress();
  }

  get addressFilter(): string{
    return this._addressFilter;
  }

  constructor() { }

  ngOnInit(): void {
  }

  toggleIcon(){
    this.showIcon = !this.showIcon;
  }

  allGet(){
    return this.owners;
  }

  filterByAddress(){
    this.filteredowners = this.owners.filter(owner =>owner.address.includes(this.addressFilter))
  }

  delete(id: string){
    for(let i = 0; i < this.owners.length; ++i){
      if(this.owners[i].id === id){
        this.owners.splice(i,1);
      }
    }
  }


}
