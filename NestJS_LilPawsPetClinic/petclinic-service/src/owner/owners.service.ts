import { Injectable, NotFoundException } from '@nestjs/common';
import { Owner } from './Owner.model';
import {v1 as uuid} from 'uuid';
import { OwnerSearchDto } from './OwnerSearch.dto';
import { OwnerUpdateDto } from './OwnerUpdate.dto';
import { OwnerCreateDto } from './OwnerCreate.dto';

@Injectable()
export class OwnersService {

    private owners: Owner[] = []

    getAllOwners(){
        return this.owners;
    }

    createOwner(ownerCreateDto: OwnerCreateDto){
        
        const { firstName,
            lastName,
            petName,
            address,
            email,
            phoneNumber
            } = ownerCreateDto
        
        const owner= {
            id: uuid(),
            firstName,
            lastName,
            petName,
            address,
            email,
            phoneNumber
        }

        this.owners.push(owner)
        return owner;
    }

    ownerSearch(ownerSearchDto:OwnerSearchDto){
        console.log(ownerSearchDto)
        const {name} = ownerSearchDto;
        let owners = this.getAllOwners();

        // if(status){
        //     owners = owners.filter(owner => owner.status === status);
        //   //  console.log(employees)
        // }

        if(name){
            owners = owners.filter(owner => owner.firstName.includes(name) || owner.lastName.includes(name))
           
        }

        return owners;

    }

    getOwnerById(id: string): Owner {
        const owners = this.getAllOwners();
        let owner = owners.find(owner => owner.id === id)
        if(!owner){
            throw new NotFoundException(`${id} does not exist `)
        }

        return owner
    }

    updateOwner(ownerUpdatedto: OwnerUpdateDto): Owner{

        const { id, city } = ownerUpdatedto;

        let owner = this.getOwnerById(id)
        owner.address = city
        return owner;
    }


    deleteOwner(id: string): boolean{
        let owners = this.getAllOwners();
        this.owners = owners.filter(owner => owner.id != id)
        return (owners.length != this.owners.length)
    }
}
