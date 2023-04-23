// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

// Pages
import { HomeComponent }   from './pages/home/home.component';
import { BlogsComponent }   from './pages/blogs/blogs.component';
import { SigninComponent }   from './pages/signin/signin.component';
import { SignupComponent }   from './pages/signup/signup.component';

// Firebase
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { environment } from '../environments/environment';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { HeaderComponent } from './components/header/header.component';
import { BlogsHomeComponent } from './components/blogs-home/blogs-home.component';
import { ContactsHomeComponent } from './components/contacts-home/contacts-home.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarSearchComponent } from './components/navbar-search/navbar-search.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';

@NgModule({
  declarations: [
    AppComponent,

    // Pages
    HomeComponent,
    BlogsComponent,
    SigninComponent,
    SignupComponent,

    // Components
    NavbarComponent,
    RegistrationComponent,
    HeaderComponent,
    BlogsHomeComponent,
    ContactsHomeComponent,
    NewsletterComponent,
    FooterComponent,
    LoginComponent,
    NavbarSearchComponent,
    BlogListComponent
  ],
  imports: [
    // Modules
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    // Firebase
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
