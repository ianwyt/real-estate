// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Services
import { NewsletterService } from './services/newsletter/newsletter.service';
import { BlogPostService } from './services/blog-post/blog-post.service';

// Pages
import { HomeComponent }   from './pages/home/home.component';
import { BlogsComponent }   from './pages/blogs/blogs.component';
import { SigninComponent }   from './pages/signin/signin.component';
import { SignupComponent }   from './pages/signup/signup.component';
import { ContactsComponent }   from './pages/contacts/contacts.component';
import { ErrorsComponent }   from './pages/not-found/errors.component';
import { BlogPostPageComponent }   from './pages/blog-post-page/blog-post-page.component';
import { TestimonialsComponent }   from './pages/testimonials/testimonials.component';
import { AboutComponent }   from './pages/about/about.component';
import { BlogPostSubmissionComponent }   from './pages/blog-post-submission/blog-post-submission.component';


// Firebase
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireFunctionsModule } from '@angular/fire/compat/functions';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
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
import { NewsletterHeaderComponent } from './components/newsletter-header/newsletter-header.component';
import { FeaturesComponent } from './components/features/features.component';
import { HttpCodesComponent } from './components/http-codes/http-codes.component';
import { TestimonialsFeatureComponent } from './components/testimonials-feature/testimonials-feature.component';
import { CommentsComponent } from './components/comments/comments.component';
import { MobileNavbarComponent } from './components/mobile-navbar/mobile-navbar.component';
import { BlogPostComponent } from './components/blog-post/blog-post.component';
import { BlogEditorComponent } from './components/blog-editor/blog-editor.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { TeamComponent } from './components/team/team.component';
import { StatsComponent } from './components/stats/stats.component';
import { FeaturesPointsComponent } from './components/features-points/features-points.component';
import { FeaturesHeaderComponent } from './components/features-header/features-header.component';
import { BlogSubmissionComponent } from './components/blog-submission/blog-submission.component';

@NgModule({
  declarations: [
    AppComponent,

    // Pages
    HomeComponent,
    BlogsComponent,
    SigninComponent,
    SignupComponent,
    ContactsComponent,
    ErrorsComponent,
    BlogPostPageComponent,
    TestimonialsComponent,
    AboutComponent,
    BlogPostSubmissionComponent,

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
    BlogListComponent,
    NewsletterHeaderComponent,
    FeaturesComponent,
    HttpCodesComponent,
    TestimonialsFeatureComponent,
    CommentsComponent,
    MobileNavbarComponent,
    BlogPostComponent,
    BlogEditorComponent,
    HowItWorksComponent,
    TeamComponent,
    StatsComponent,
    FeaturesPointsComponent,
    FeaturesHeaderComponent,
    BlogSubmissionComponent
  ],
  imports: [
    // Modules
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    BrowserAnimationsModule,

    // Firebase
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireFunctionsModule,
    AngularFireAuthModule,

  ],
  providers: [NewsletterService, BlogPostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
