import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRouterModule } from "./app.routing";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import { MainComponent } from './main/main.component';
import { AppComponent } from './app.component';
import { HttpService } from './http.service';
import { PortfolioComponent } from './main/portfolio/portfolio.component';
import { MeComponent } from './main/me/me.component';
import { PricesComponent } from './main/prices/prices.component';
import { ContactsComponent } from './main/contacts/contacts.component';
import { BlogComponent } from './main/blog/blog.component';
import { FeedbackComponent } from './main/feedback/feedback.component';

mergeAllIconsToOneObject();

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PortfolioComponent,
    MeComponent,
    PricesComponent,
    ContactsComponent,
    BlogComponent,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouterModule,
    FontAwesomeModule
  ],
  providers: [ HttpService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

function mergeAllIconsToOneObject() {
  let fa = {...fas, ...fab};
  for (const icon in fa) {
    fa[icon].prefix = 'fas';
  }
  library.add(fa);
}