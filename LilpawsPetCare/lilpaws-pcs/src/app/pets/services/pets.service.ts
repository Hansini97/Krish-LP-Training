import { Injectable } from '@angular/core';
import pets from '../data/pets.json';
import { Pet } from '../pets.model';

@Injectable({
  providedIn: 'root'
})
export class PetsService {
  pets: Pet[] = pets;

  constructor() { }

  allGet() {
    return this.pets;
  }

  getPet(id: Number) {
    return this.pets.find(pe => pe.id == id);
  }

  onCreate(pet: Pet) {
    this.pets.push(pet);
  }
}