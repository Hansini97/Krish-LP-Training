import { Body, Controller, Delete, Get, HttpCode, HttpStatus, NotFoundException, Param, Post, Put, Query, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { request } from 'express';
import { OwnerCreateDto } from './dto/OwnerCreate.dto';
import { OwnersService } from './owners.service';
import { OwnerSearchDto } from './dto/OwnerSearch.dto';
import { OwnerUpdateDto } from './dto/OwnerUpdate.dto';
import { Owner } from './schemas/Owner.schema';

@Controller('owners')
export class OwnersController {

  constructor(private ownerService:OwnersService){

  }

  @Get()
  @UsePipes(ValidationPipe)
  async getAllOwners(@Query() param:OwnerSearchDto): Promise<Owner[]> {


    return await this.ownerService.getAllOwners();

  }



  @Post()
  @UsePipes(ValidationPipe)
  createOwner(@Body() ownerCreateDto:OwnerCreateDto ):  Promise<Owner>{

    return this.ownerService.createOwner(ownerCreateDto)

  }

 

}
