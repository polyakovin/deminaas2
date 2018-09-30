import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { BlogComponent } from './main/blog/blog.component';
import { ContactsComponent } from './main/contacts/contacts.component';
import { FeedbackComponent } from './main/feedback/feedback.component';
import { MeComponent } from './main/me/me.component';
import { PortfolioComponent } from './main/portfolio/portfolio.component';
import { PricesComponent } from './main/prices/prices.component';

const APP_ROUTES: Routes = [
  { path: 'blog', component: BlogComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'me', component: MeComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'prices', component: PricesComponent },
  { path: '**', redirectTo: '/portfolio', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES, { useHash: false })
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class AppRouterModule {}