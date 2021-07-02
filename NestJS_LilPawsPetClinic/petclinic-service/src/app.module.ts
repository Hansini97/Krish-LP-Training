import { Module } from '@nestjs/common';
import { OwnersModule } from './owner/owners.module';
import { PetsModule } from './pet/pets.module';


@Module({
  imports: [OwnersModule,
            PetsModule
          ],
  

})
export class AppModule {}
