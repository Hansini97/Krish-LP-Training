import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";




export type PetDocument = Pet & Document;

@Schema()
export class Pet{

    @Prop()
    id: string
    @Prop({required: true})
    type: string
    @Prop({required: true})
    breed: string
    @Prop()
    name: string
    @Prop()
    age: string
    @Prop()
    ownerName: string
 
}

export const PetSchema = SchemaFactory.createForClass(Pet);
