import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { OwnerCreateDto } from "./dto/OwnerCreate.dto";
import { Owner, OwnerDocument } from "./schemas/Owner.schema";

@Injectable()
export class OwnerRepository{

    constructor(@InjectModel(Owner.name) private ownerModel: Model<OwnerDocument>){}

    async create(createOwnerDTO: OwnerCreateDto): Promise<Owner>{

        let newOwner = new this.ownerModel(createOwnerDTO);
        return await newOwner.save();
    }
    
    async findAll(): Promise<Owner[]>{
        return await this.ownerModel.find();
    }
}