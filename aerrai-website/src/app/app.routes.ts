import { Routes } from '@angular/router';

export const routes: Routes = [
  // Homepage route
  {
    path: '',
    loadComponent: () => import('./features/marketing/pages/homepage/homepage').then(m => m.HomepageComponent),
    title: 'Aerrai - Advanced Technology Solutions'
  },
  
  // Admin portal route (secret route)
  // TODO: Add admin guard for protection in Phase 4
//   {
//     path: 'admin-portal',
//     loadChildren: () => import('./features/admin/admin.routes').then(m => m.adminRoutes),
//     title: 'Aerrai Admin Portal'
//     // canActivate: [AdminGuard] // TODO: Implement in Phase 4
//   },
  
  // Tech suite detail routes (future)
  // TODO: Implement detailed tech suite pages
//   {
//     path: 'solutions/:id',
//     loadComponent: () => import('./features/marketing/pages/tech-suite-detail/tech-suite-detail.component').then(m => m.TechSuiteDetailComponent),
//     title: 'Solution Details - Aerrai'
//   },
  
  // Catch-all redirect
  {
    path: '**',
    redirectTo: ''
  }
];

// TODO: Add route guards for admin protection
// TODO: Add route resolvers for data pre-loading
// TODO: Implement dynamic title service for SEO