import { IsNotEmpty} from "class-validator"


export class PetCreateDto {
    id: string
    @IsNotEmpty()
    type: string
    @IsNotEmpty()
    breed: string
    name: string
    age: string
    ownerName: string
  
}
