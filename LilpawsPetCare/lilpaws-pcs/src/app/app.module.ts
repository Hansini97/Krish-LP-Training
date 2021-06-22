import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { OwnersComponent } from './owners/owners.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { CreateOwnerComponent } from './owners/createOwner/createOwner.component';
import { PetsComponent } from './pets/pets.component';
import { CreatePetComponent } from './pets/create-pet/create-pet.component';
import { UpdatePetComponent } from './pets/update-pet/update-pet.component';
import { UpdateOwnerComponent } from './owners/update-owner/update-owner.component';




@NgModule({
  declarations: [
    AppComponent,
    OwnersComponent,
    HomeComponent,
    CreateOwnerComponent,
    PetsComponent,
    CreatePetComponent,
    UpdatePetComponent,
    UpdateOwnerComponent,
   // HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'owners', component: OwnersComponent },
      { path: 'owners/:id', component: OwnersComponent },
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'create/owners/:id', component: CreateOwnerComponent},
      { path: 'create/pets/:id', component: CreatePetComponent}, 
      { path: 'pets', component: PetsComponent},
      { path: 'update/pets/:id', component: UpdatePetComponent},
      { path: 'update/owners/:id', component: UpdateOwnerComponent}
      
    ])
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
