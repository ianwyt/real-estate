import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Pages
import { HomeComponent }   from './pages/home/home.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { SigninComponent }   from './pages/signin/signin.component';
import { SignupComponent }   from './pages/signup/signup.component';
import { ContactsComponent }   from './pages/contacts/contacts.component';
import { ErrorsComponent }   from './pages/not-found/errors.component';


// Routes
const routes: Routes = [
  { path: '', component: HomeComponent }, // Home page
  { path: 'blogs', component: BlogsComponent }, // Blog page
  { path: 'signin', component: SigninComponent }, // Sign in page
  { path: 'signup', component: SignupComponent }, // Sign up page
  { path: 'newsletter', component: ContactsComponent }, // Newsletter page
  { path: '**', component: ErrorsComponent } // Errors page

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
