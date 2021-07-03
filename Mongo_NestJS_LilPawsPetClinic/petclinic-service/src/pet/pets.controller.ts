import { Body, Controller, Delete, Get, HttpCode, HttpStatus, NotFoundException, Param, Post, Put, Query, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { request } from 'express';
import { PetCreateDto } from './dto/PetCreate.dto';
import { PetsService } from './pets.service';
import { PetSearchDto } from './dto/PetSearch.dto';
import { PetUpdateDto } from './dto/PetUpdate.dto';
import { Pet } from './schemas/Pet.schema'; 

@Controller('pets')
export class PetsController {

  constructor(private petService:PetsService){

  }

  @Get()
  @UsePipes(ValidationPipe)
  async getAllPets(@Query() param:PetSearchDto): Promise<Pet[]> {


    return await this.petService.getAllPets();

  }
 

  @Post()
  @UsePipes(ValidationPipe)
  createPet(@Body() petCreateDto:PetCreateDto ):  Promise<Pet>{

    return this.petService.createPet(petCreateDto)

  }
  

}
