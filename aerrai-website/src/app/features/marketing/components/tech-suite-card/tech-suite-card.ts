import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

// TODO: Import TechSuite interface from core models
interface TechSuite {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  priority: 'critical' | 'high' | 'medium' | 'low';
  description: string;
  keyBenefits: string[];
  features: any[];
  domains: string[];
  cta: {
    primary: string;
    secondary: string;
  };
}

@Component({
  selector: 'app-tech-suite-card',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './tech-suite-card.html',
  styleUrls: ['./tech-suite-card.scss']
})
export class TechSuiteCardComponent {
  // TODO: Replace with proper TechSuite interface import
  @Input() techSuite!: TechSuite;
  @Input() animationDelay = 0;
  @Input() isHovered = false;

  @Output() demoRequest = new EventEmitter<string>();
  @Output() learnMore = new EventEmitter<string>();

  // TODO: Add animation control from layout service
  // TODO: Implement card interaction analytics
  // TODO: Add accessibility keyboard navigation
  // TODO: Connect to global theme service for dynamic styling

  onDemoRequest(): void {
    // TODO: Implement actual demo request functionality in Phase 3
    console.log(`Demo requested for: ${this.techSuite.title}`);
    this.demoRequest.emit(this.techSuite.id);
  }

  onLearnMore(): void {
    // TODO: Navigate to detailed tech suite page
    console.log(`Learn more clicked for: ${this.techSuite.title}`);
    this.learnMore.emit(this.techSuite.id);
  }

  getPriorityClass(): string {
    // TODO: Make priority styling configurable via admin portal
    return `priority-${this.techSuite.priority}`;
  }

  getPriorityColor(): string {
    // TODO: Connect to theme service for dynamic colors
    const colors = {
      'critical': '#ef4444',
      'high': '#f59e0b', 
      'medium': '#4f46e5',
      'low': '#6b7280'
    };
    return colors[this.techSuite.priority] || colors.medium;
  }
}