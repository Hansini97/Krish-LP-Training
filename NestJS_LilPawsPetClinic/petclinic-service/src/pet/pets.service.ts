import { Injectable, NotFoundException } from '@nestjs/common';
import { Pet } from './Pet.model';
import {v1 as uuid} from 'uuid';
import { PetSearchDto } from './PetSearch.dto';
import { PetUpdateDto } from './PetUpdate.dto';
import { PetCreateDto } from './PetCreate.dto';

@Injectable()
export class PetsService {

    private pets: Pet[] = []

    getAllPets(){
        return this.pets;
    }

    createPet(petCreateDto: PetCreateDto){
        
        const { type,
            breed,
            name,
            age,
            ownerName
            } = petCreateDto
        
        const pet= {
            id: uuid(),
            type,
            breed,
            name,
            age,
            ownerName,
            
        }

        this.pets.push(pet)
        return pet;
    }

    petSearch(petSearchDto:PetSearchDto){
        console.log(petSearchDto)
        const {name} = petSearchDto;
        let pets = this.getAllPets();

        // if(status){
        //     owners = owners.filter(owner => owner.status === status);
        //   //  console.log(employees)
        // }

        if(name){
            pets = pets.filter(pet => pet.name.includes(name) )
           
        }

        return pets;

    }

    getPetById(id: string): Pet {
        const pets = this.getAllPets();
        let pet = pets.find(pet => pet.id === id)
        if(![pet]){
            throw new NotFoundException(`${id} does not exist `)
        }

        return pet
    }

    updatePet(petUpdatedto: PetUpdateDto): Pet{

        const { id, agePet } = petUpdatedto;

        let pet = this.getPetById(id)
        pet.age = agePet
        return pet;
    }


    deletePet(id: string): boolean{
        let pets = this.getAllPets();
        this.pets = pets.filter(pet => pet.id != id)
        return (pets.length != this.pets.length)
    }
}
