import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Pages
import { HomeComponent }   from './pages/home/home.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { SigninComponent }   from './pages/signin/signin.component';
import { SignupComponent }   from './pages/signup/signup.component';
import { ContactsComponent }   from './pages/contacts/contacts.component';
import { ErrorsComponent }   from './pages/not-found/errors.component';
import { BlogPostPageComponent }   from './pages/blog-post-page/blog-post-page.component';
import { TestimonialsComponent }   from './pages/testimonials/testimonials.component';
import { AboutComponent }   from './pages/about/about.component';
import { BlogPostSubmissionComponent }   from './pages/blog-post-submission/blog-post-submission.component';
import { ShowroomComponent } from './pages/showroom/showroom.component';

// Routes
const routes: Routes = [
  { path: '', component: HomeComponent }, // Home page
  { path: 'about', component: AboutComponent }, // About page
  { path: 'blogs', component: BlogsComponent }, // Blog page
  { path: 'signin', component: SigninComponent }, // Sign in page
  { path: 'signup', component: SignupComponent }, // Sign up page
  { path: 'newsletter', component: ContactsComponent }, // Newsletter page
  { path: 'testimonials', component: TestimonialsComponent }, // Testimonials page
  { path: 'submitblog', component: BlogPostSubmissionComponent }, // BlogPost Submission page
  { path: 'testblog', component: BlogPostPageComponent }, // Test blog post page
  { path: 'showroom', component: ShowroomComponent }, // Test blog post page
  { path: '**', component: ErrorsComponent } // Errors page

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
