import { Component } from '@angular/core';
import { NewsletterService } from '../../services/newsletter/newsletter.service';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent {
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