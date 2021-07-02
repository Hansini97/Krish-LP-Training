import { IsNotEmpty} from "class-validator"


export class OwnerCreateDto {
    id: string
    @IsNotEmpty()
    firstName: string
    @IsNotEmpty()
    lastName: string
    petName: string
    address: string
    email: string
    phoneNumber: number
}
