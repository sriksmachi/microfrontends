import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule,Routes } from '@angular/router';
import { ListingComponent } from './listing/listing.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./inventorylisting/inventorylisting.module')
    .then(m => m.InventorylistingModule)
  }
];

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, ListingComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
