import { Component } from '@angular/core';
import { NewsletterService } from '../../services/newsletter/newsletter.service';

@Component({
  selector: 'app-newsletter-header',
  templateUrl: './newsletter-header.component.html',
  styleUrls: ['./newsletter-header.component.css'],
})
export class NewsletterHeaderComponent {
  email = '';

  constructor(private newsletterService: NewsletterService) {}

  submitEmail() {
    if (this.email) {
      this.newsletterService.addSubscriber(this.email).then(() => {
        this.newsletterService.sendWelcomeEmail(this.email);
      });
    }
  }
}