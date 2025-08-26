import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class HeaderComponent {
  // TODO: Implement responsive mobile menu
  // TODO: Add active route highlighting
  // TODO: Connect to layout service for dynamic navigation
  // TODO: Add smooth scroll navigation for single-page sections
  // TODO: Implement header transparency on scroll

  isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    // TODO: Add mobile menu animation
  }

  scrollToSection(sectionId: string): void {
    // TODO: Implement smooth scroll to section functionality
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}