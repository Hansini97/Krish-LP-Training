import { Body, Controller, Delete, Get, HttpCode, NotFoundException, Param, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common';

import { OwnerCreateDto } from './OwnerCreate.dto';
import { OwnersService } from './owners.service';
import { OwnerSearchDto } from './OwnerSearch.dto';
import { OwnerUpdateDto } from './OwnerUpdate.dto';

@Controller('owners')
export class OwnersController {

  constructor(private ownerService:OwnersService){

  }

  @Get()
  @UsePipes(ValidationPipe)
  getAllOwners(@Query() param:OwnerSearchDto) {

    if(Object.keys(param).length){
      // console.log(param)
      // console.log('filter')
      return this.ownerService.ownerSearch(param)
    }else{
      // console.log('No filter')
      return this.ownerService.getAllOwners()
    }
  }
  

  @Post()
  @UsePipes(ValidationPipe)

  createOwner(@Body() ownerCreateDto: OwnerCreateDto ){

    return this.ownerService.createOwner(ownerCreateDto)

  }

  @Get('/:id')
  getOwnerById(@Param('id') id :string){
      return this.ownerService.getOwnerById(id)
  }

  @Put('/:id/city')
  updateOwner(@Param('id') id: string, @Body() ownerUpdateDto: OwnerUpdateDto){
    ownerUpdateDto.id = id
    return this.ownerService.updateOwner(ownerUpdateDto)
  }

  @Delete('/:id')
  @HttpCode(204)
  deleteOwner(@Param('id') id: string){
    if( !this.ownerService.deleteOwner(id)){
      throw new NotFoundException('Owner does not exist!')
    }
  }

}
