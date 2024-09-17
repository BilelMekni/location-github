import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ServiceComponent } from './components/service/service.component';
import { AboutComponent } from './components/about/about.component';
import { FactComponent } from './components/fact/fact.component';
import { StartComponent } from './components/start/start.component';
import { BookingComponent } from './components/booking/booking.component';
import { TeamComponent } from './components/team/team.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { BackComponent } from './components/back/back.component';
import { LoginComponent } from './components/login/login.component';
import { ClockComponent } from './components/clock/clock.component';
import { BannerComponent } from './components/banner/banner.component';
import { InformationsComponent } from './components/informations/informations.component';
import { DefinitionCarComponent } from './components/definition-car/definition-car.component';
import { ProfileCarComponent } from './components/profile-car/profile-car.component';
import { AutomobileCarComponent } from './components/automobile-car/automobile-car.component';
import { TechnicalCarComponent } from './components/technical-car/technical-car.component';
import { ClientsCarComponent } from './components/clients-car/clients-car.component';
import { ServicesCarComponent } from './components/services-car/services-car.component';
import { BoutonComponent } from './components/bouton/bouton.component';
import { InfoComponent } from './components/info/info.component';
import { ArticleComponent } from './components/article/article.component';
import { TechniciensComponent } from './components/techniciens/techniciens.component';
import { PersonneComponent } from './components/personne/personne.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { SignupAdminComponent } from './components/signup-admin/signup-admin.component';
import { SignupClientsComponent } from './components/signup-clients/signup-clients.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AdminTableComponent } from './components/admin-table/admin-table.component';
import { ClientsTableComponent } from './components/clients-table/clients-table.component';
import { EspaceAdminComponent } from './components/espace-admin/espace-admin.component';
import { EspaceClentsComponent } from './components/espace-clents/espace-clents.component';
import { JwPaginationModule } from 'jw-angular-pagination';
import { PublicationsComponent } from './components/publications/publications.component';
import { PublicationsTableComponent } from './components/publications-table/publications-table.component';
import { AddCarComponent } from './components/add-car/add-car.component';
import { CarTableComponent } from './components/car-table/car-table.component';
import { UpdateCarsComponent } from './components/update-cars/update-cars.component';
import { SearchCarsComponent } from './components/search-cars/search-cars.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContactTableComponent } from './components/contact-table/contact-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    TopbarComponent,
    CarouselComponent,
    ServiceComponent,
    AboutComponent,
    FactComponent,
    StartComponent,
    BookingComponent,
    TeamComponent,
    TestimonialComponent,
    BackComponent,
    LoginComponent,
    ClockComponent,
    BannerComponent,
    InformationsComponent,
    DefinitionCarComponent,
    ProfileCarComponent,
    AutomobileCarComponent,
    TechnicalCarComponent,
    ClientsCarComponent,
    ServicesCarComponent,
    BoutonComponent,
    InfoComponent,
    ArticleComponent,
    TechniciensComponent,
    PersonneComponent,
    JobsComponent,
    SignupAdminComponent,
    SignupClientsComponent,
    AdminTableComponent,
    ClientsTableComponent,
    EspaceAdminComponent,
    EspaceClentsComponent,
    PublicationsComponent,
    PublicationsTableComponent,
    AddCarComponent,
    CarTableComponent,
    UpdateCarsComponent,
    SearchCarsComponent,
    ContactComponent,
    ContactTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwPaginationModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
