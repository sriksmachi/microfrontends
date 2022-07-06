import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RemoteEntryComponent } from './entry.component';
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
  declarations: [RemoteEntryComponent, NxWelcomeComponent],
  imports: [
    CommonModule, FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: RemoteEntryComponent,
      },
    ]),
  ],
  providers: [],
})
export class RemoteEntryModule {}
