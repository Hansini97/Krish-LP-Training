import { Injectable, NotFoundException } from '@nestjs/common';
import { v1 as uuid } from 'uuid'
import { PetSearchDto } from './dto/PetSearch.dto';
import { PetUpdateDto } from './dto/PetUpdate.dto';
import { PetCreateDto } from './dto/PetCreate.dto';
import { Pet } from './schemas/Pet.schema';
import { PetRepository } from './Pet.repository';

@Injectable()
export class PetsService {

    constructor(private petRepository: PetRepository){

    }

    async getAllPets(): Promise<Pet[]>{
        return await this.petRepository.findAll();
    }

    async createPet(petCreateDto: PetCreateDto):Promise <Pet>{
    
        return await this.petRepository.create(petCreateDto);
    }
}