import { Injectable } from '@angular/core';
import owners from '../data/owners.json';
import { Owner } from '../owners.model';

@Injectable({
  providedIn: 'root'
})
export class OwnersService {
  owners: Owner[] = owners;

  constructor() { }

  allGet() {
    return this.owners;
  }

  getOwner(id: Number) {
    return this.owners.find(v => v.id == id);
  }

  onCreate(owner: Owner) {
    this.owners.push(owner);
  }
}