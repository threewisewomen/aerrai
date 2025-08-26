import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export interface TechSuite {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  priority: 'critical' | 'high' | 'medium' | 'low';
  description: string;
  keyBenefits: string[];
  features: {
    title: string;
    description: string;
  }[];
  domains: string[];
  cta: {
    primary: string;
    secondary: string;
  };
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  theme: string;
}

export interface TechSuiteData {
  company: CompanyInfo;
  techSuites: TechSuite[];
  metadata: {
    version: string;
    lastUpdated: string;
    totalSuites: number;
    featuredSuite: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class TechSuiteService {
  private dataSubject = new BehaviorSubject<TechSuiteData | null>(null);
  public data$ = this.dataSubject.asObservable();
  
  private readonly DATA_PATH = '/assets/data/tech-suites.json';

  constructor(private http: HttpClient) {
    this.loadData();
  }

  /**
   * Load tech suite data from JSON file
   */
  private loadData(): void {
    this.http.get<TechSuiteData>(this.DATA_PATH)
      .pipe(
        catchError(error => {
          console.error('Failed to load tech suite data:', error);
          return of(this.getDefaultData());
        })
      )
      .subscribe(data => {
        this.dataSubject.next(data);
      });
  }

  /**
   * Get all tech suites
   */
  getTechSuites(): Observable<TechSuite[]> {
    return this.data$.pipe(
      map(data => data?.techSuites || [])
    );
  }

  /**
   * Get specific tech suite by ID
   */
  getTechSuite(id: string): Observable<TechSuite | undefined> {
    return this.data$.pipe(
      map(data => data?.techSuites.find(suite => suite.id === id))
    );
  }

  /**
   * Get company information
   */
  getCompanyInfo(): Observable<CompanyInfo> {
    return this.data$.pipe(
      map(data => data?.company || this.getDefaultData().company)
    );
  }

  /**
   * Get featured tech suite
   */
  getFeaturedSuite(): Observable<TechSuite | undefined> {
    return this.data$.pipe(
      map(data => {
        const featuredId = data?.metadata.featuredSuite;
        return data?.techSuites.find(suite => suite.id === featuredId);
      })
    );
  }

  /**
   * Update tech suite data (for admin portal)
   */
  updateTechSuites(data: TechSuiteData): Observable<boolean> {
    // In a real app, this would make an API call
    // For now, we update in-memory and would need file system access
    this.dataSubject.next(data);
    
    // TODO: Implement file write for admin portal
    return of(true);
  }

  /**
   * Add new tech suite (for admin portal)
   */
  addTechSuite(suite: TechSuite): Observable<boolean> {
    const currentData = this.dataSubject.value;
    if (!currentData) return of(false);

    const updatedData = {
      ...currentData,
      techSuites: [...currentData.techSuites, suite],
      metadata: {
        ...currentData.metadata,
        totalSuites: currentData.techSuites.length + 1,
        lastUpdated: new Date().toISOString().split('T')[0]
      }
    };

    return this.updateTechSuites(updatedData);
  }

  /**
   * Delete tech suite (for admin portal)
   */
  deleteTechSuite(id: string): Observable<boolean> {
    const currentData = this.dataSubject.value;
    if (!currentData) return of(false);

    const updatedData = {
      ...currentData,
      techSuites: currentData.techSuites.filter(suite => suite.id !== id),
      metadata: {
        ...currentData.metadata,
        totalSuites: currentData.techSuites.length - 1,
        lastUpdated: new Date().toISOString().split('T')[0]
      }
    };

    return this.updateTechSuites(updatedData);
  }

  /**
   * Default fallback data
   */
  private getDefaultData(): TechSuiteData {
    return {
      company: {
        name: "aerrai",
        tagline: "next is now",
        theme: "deep-space"
      },
      techSuites: [],
      metadata: {
        version: "1.0.0",
        lastUpdated: new Date().toISOString().split('T')[0],
        totalSuites: 0,
        featuredSuite: ""
      }
    };
  }

  /**
   * Reload data from file (useful for admin portal)
   */
  reloadData(): void {
    this.loadData();
  }
}