import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-section.html',
  styleUrls: ['./hero-section.scss']
})
export class HeroSectionComponent implements OnInit {
  // TODO: Connect to company info service for dynamic content
  // TODO: Add typewriter animation for tagline
  // TODO: Implement scroll-triggered animations
  // TODO: Add particle effect interactions
  // TODO: Connect to layout service for theme customization

  // Placeholder data - TODO: Replace with service data
  companyName = 'aerrai';
  tagline = 'next is now';
  heroTitle = 'Advanced Technology Solutions';
  heroSubtitle = 'Transforming businesses through cutting-edge software systems and strategic consulting';

  // Animation control
  isVisible = false;
  animationDelay = 0;

  ngOnInit(): void {
    // TODO: Implement intersection observer for scroll animations
    // Simple delay for initial animation
    setTimeout(() => {
      this.isVisible = true;
    }, 500);
  }

  scrollToSolutions(): void {
    // TODO: Implement smooth scroll to tech suites section
    const element = document.getElementById('tech-suites');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  requestDemo(): void {
    // TODO: Implement demo request functionality in Phase 3
    console.log('Demo request clicked - placeholder action');
  }
}