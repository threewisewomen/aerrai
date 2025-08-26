import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './contact-section.html',
  styleUrls: ['./contact-section.scss']
})
export class ContactSectionComponent {
  // TODO: Connect to company info service for dynamic contact details
  // TODO: Implement form validation and submission (Phase 3)
  // TODO: Add analytics tracking for CTA interactions
  // TODO: Connect to layout service for section customization
  // TODO: Add email integration for demo requests

  // Placeholder contact data - TODO: Replace with service data
  contactInfo = {
    email: 'hello@aerrai.com',
    phone: '+91 80 1234 5678',
    address: 'Bengaluru, Karnataka, India'
  };

  // Form state - TODO: Implement in Phase 3
  isSubmitting = false;
  formSubmitted = false;

  requestDemo(): void {
    // TODO: Implement actual demo request functionality
    // TODO: Add form validation
    // TODO: Connect to email service
    // TODO: Add success/error handling
    console.log('Demo request submitted - placeholder action');
    this.isSubmitting = true;
    
    // Simulate submission
    setTimeout(() => {
      this.isSubmitting = false;
      this.formSubmitted = true;
    }, 2000);
  }

  contactUs(): void {
    // TODO: Open email client or contact modal
    window.open(`mailto:${this.contactInfo.email}?subject=Aerrai Inquiry`);
  }

  callUs(): void {
    // TODO: Add click-to-call functionality
    window.open(`tel:${this.contactInfo.phone}`);
  }
}