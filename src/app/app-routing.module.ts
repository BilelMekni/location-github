import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { DefinitionCarComponent } from './components/definition-car/definition-car.component';
import { ProfileCarComponent } from './components/profile-car/profile-car.component';
import { AutomobileCarComponent } from './components/automobile-car/automobile-car.component';
import { TechnicalCarComponent } from './components/technical-car/technical-car.component';
import { ClientsCarComponent } from './components/clients-car/clients-car.component';
import { ServicesCarComponent } from './components/services-car/services-car.component';
import { SignupAdminComponent } from './components/signup-admin/signup-admin.component';
import { SignupClientsComponent } from './components/signup-clients/signup-clients.component';
import { AdminTableComponent } from './components/admin-table/admin-table.component';
import { ClientsTableComponent } from './components/clients-table/clients-table.component';
import { EspaceAdminComponent } from './components/espace-admin/espace-admin.component';
import { EspaceClentsComponent } from './components/espace-clents/espace-clents.component';
import { PublicationsComponent } from './components/publications/publications.component';
import { PublicationsTableComponent } from './components/publications-table/publications-table.component';
import { AddCarComponent } from './components/add-car/add-car.component';
import { CarTableComponent } from './components/car-table/car-table.component';
import { UpdateCarsComponent } from './components/update-cars/update-cars.component';
import { SearchCarsComponent } from './components/search-cars/search-cars.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContactTableComponent } from './components/contact-table/contact-table.component';


const routes: Routes = [
  //localhost 4200:// Home
  { path: "", component: HomeComponent },
  //localhost 4200:// Login
  { path: "login", component: LoginComponent },
  //localhost 4200:// Definition car
  { path: "defintionCar", component: DefinitionCarComponent },
  //localhost 4200:// Profile car
  { path: "profileCar", component: ProfileCarComponent },
  //localhost 4200:// Automobile car
  { path: "automobileCar", component: AutomobileCarComponent },
  //localhost 4200:// Technical car
  { path: "technicalCar", component: TechnicalCarComponent },
  //localhost 4200:// Clients car
  { path: "clientsCar", component: ClientsCarComponent },
  //localhost 4200:// Client Table
  { path: "clientTable", component: ClientsTableComponent },
  //localhost 4200:// Services car
  { path: "servicesCar", component: ServicesCarComponent },
  //localhost 4200:// Signup Admin
  { path: "signupAdmin", component: SignupAdminComponent },
  //localhost 4200://  Admin Table
  { path: "adminTable", component: AdminTableComponent },
  //localhost 4200:// Signup Clients
  { path: "signupClients", component: SignupClientsComponent },
  //localhost 4200:// Espace Admin
  { path: "espaceAdmin", component: EspaceAdminComponent },
  //localhost 4200:// Espace Clients
  { path: "espaceClients", component: EspaceClentsComponent },
  //localhost 4200:// Publications Clients
  { path: "publications", component: PublicationsComponent },
  //localhost 4200:// Publications Table Clients
  { path: "publicationsTable", component: PublicationsTableComponent },
  //localhost 4200:// Add Cars
  { path: "addCar", component: AddCarComponent },
  //localhost 4200:// Gett All Cars By Admin
  { path: "carTable", component: CarTableComponent },
  //localhost 4200:// Update Cars By Admin
  { path: "updateCars/:id", component: UpdateCarsComponent },
  //localhost 4200:// Update Cars By Admin
  { path: "searchCars", component: SearchCarsComponent },
  //localhost 4200:// Contact
  { path: "contact", component: ContactComponent },
    //localhost 4200:// Contact Table
    {path: "contactTable", component: ContactTableComponent}












];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
