import { Injectable, NotFoundException } from '@nestjs/common';
import { v1 as uuid } from 'uuid'
import { OwnerSearchDto } from './dto/OwnerSearch.dto';
import { OwnerUpdateDto } from './dto/OwnerUpdate.dto';
import { OwnerCreateDto } from './dto/OwnerCreate.dto';
import { Owner } from './schemas/Owner.schema';
import { OwnerRepository } from './Owner.repository';

@Injectable()
export class OwnersService {

    constructor(private ownerRepository: OwnerRepository){

    }

    async getAllOwners(): Promise<Owner[]>{
        return await this.ownerRepository.findAll();
    }

    async createOwner(ownerCreateDto: OwnerCreateDto):Promise <Owner>{
    
        return await this.ownerRepository.create(ownerCreateDto);
    }
}