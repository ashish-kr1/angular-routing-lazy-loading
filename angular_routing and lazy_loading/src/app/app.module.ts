import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { NewModule } from './new/new.module';
import { NavComponent } from './nav/nav.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/hrader.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

const appRoutes: Routes = [

  { path: '', component: HomeComponent },

  { path: 'contact', component: ContactComponent },
  { path: 'new', loadChildren:'./new/new.module#NewModule' }


];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // NewModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
