import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechSuiteCardComponent } from '../tech-suite-card/tech-suite-card';

@Component({
  selector: 'app-tech-suite-grid',
  standalone: true,
  imports: [CommonModule, TechSuiteCardComponent],
  templateUrl: './tech-suite-grid.html',
  styleUrls: ['./tech-suite-grid.scss']
})
export class TechSuiteGridComponent implements OnInit {
  // TODO: Connect to TechSuiteService for dynamic data loading
  // TODO: Add loading states and error handling
  // TODO: Implement grid layout configuration from admin portal
  // TODO: Add filtering and sorting capabilities
  // TODO: Connect to layout service for responsive grid settings

  // Placeholder data - TODO: Replace with service data
  techSuites = [
    {
      id: 'taas',
      title: 'Technology as a Service',
      subtitle: '(TaaS)',
      icon: 'cloud_sync',
      priority: 'high' as const,
      description: 'Harness the power of Technology as a Service in your business, forgoing the hassle of hiring and managing in-house teams for your end-to-end technology needs.',
      keyBenefits: [
        'End-to-end technology solutions',
        'No in-house team management required',
        'Scalable technology infrastructure',
        'Cost-effective service model'
      ],
      features: [],
      domains: ['Software Development', 'Cloud Infrastructure', 'DevOps & Automation'],
      cta: {
        primary: 'Request TaaS Demo',
        secondary: 'Learn More'
      }
    },
    {
      id: 'dac',
      title: 'Data Analytics Console',
      subtitle: '(DAC)',
      icon: 'analytics',
      priority: 'medium' as const,
      description: 'Explore customized metrics tailored to your business needs to identify opportunities and inefficiencies across domains like finance, operations and procurement.',
      keyBenefits: [
        'Customized business metrics',
        'Cross-domain analytics',
        'Opportunity identification',
        'Inefficiency detection'
      ],
      features: [],
      domains: ['Financial Analytics', 'Operational Metrics', 'Procurement Intelligence'],
      cta: {
        primary: 'Request DAC Demo',
        secondary: 'View Analytics'
      }
    },
    {
      id: 'fsc',
      title: 'Finance and Strategy Consulting',
      subtitle: 'Expert Advisory Services',
      icon: 'trending_up',
      priority: 'critical' as const,
      description: 'Get a fresh set of eyes to assess, analyse and address your business challenges with our suite of consultants with experience across management, finance, supply chain and IT.',
      keyBenefits: [
        'Expert business assessment',
        'Multi-domain expertise',
        'Strategic problem solving',
        'Fresh perspective on challenges'
      ],
      features: [],
      domains: ['Management Consulting', 'Financial Strategy', 'Supply Chain Optimization'],
      cta: {
        primary: 'Request Consultation',
        secondary: 'Meet Our Experts'
      }
    }
  ];

  isLoading = false; // TODO: Connect to service loading state
  hasError = false;  // TODO: Connect to service error state

  ngOnInit(): void {
    // TODO: Load tech suites from service
    // TODO: Implement intersection observer for scroll animations
    this.loadTechSuites();
  }

  private loadTechSuites(): void {
    // TODO: Replace with actual service call
    // this.techSuiteService.getTechSuites().subscribe({
    //   next: (suites) => this.techSuites = suites,
    //   error: (err) => this.hasError = true
    // });
  }

  onDemoRequest(suiteId: string): void {
    // TODO: Implement demo request handling
    console.log(`Demo request for suite: ${suiteId}`);
  }

  onLearnMore(suiteId: string): void {
    // TODO: Navigate to detailed suite page or open modal
    console.log(`Learn more for suite: ${suiteId}`);
  }

  trackBySuiteId(index: number, suite: any): string {
    return suite.id;
  }
}