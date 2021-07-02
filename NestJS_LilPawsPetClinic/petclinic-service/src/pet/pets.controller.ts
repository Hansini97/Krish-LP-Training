import { Body, Controller, Delete, Get, HttpCode, NotFoundException, Param, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common';

import { PetCreateDto } from './PetCreate.dto';
import { PetsService } from './pets.service';
import { PetSearchDto } from './PetSearch.dto';
import { PetUpdateDto } from './PetUpdate.dto';

@Controller('pets')
export class PetsController {

  constructor(private petService:PetsService){

  }

  @Get()
  @UsePipes(ValidationPipe)
  getAllPets(@Query() param:PetSearchDto) {

    if(Object.keys(param).length){
      // console.log(param)
      // console.log('filter')
      return this.petService.petSearch(param)
    }else{
      // console.log('No filter')
      return this.petService.getAllPets()
    }
  }
  

  @Post()
  @UsePipes(ValidationPipe)

  createPet(@Body() petCreateDto: PetCreateDto ){

    return this.petService.createPet(petCreateDto)

  }

  @Get('/:id')
  getPetById(@Param('id') id :string){
      return this.petService.getPetById(id)
  }

  @Put('/:id/agePet')
  updatePet(@Param('id') id: string, @Body() petUpdateDto: PetUpdateDto){
    petUpdateDto.id = id
    return this.petService.updatePet(petUpdateDto)
  }

  @Delete('/:id')
  @HttpCode(204)
  deletePet(@Param('id') id: string){
    if( !this.petService.deletePet(id)){
      throw new NotFoundException('Pet does not exist!')
    }
  }

}
