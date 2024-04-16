import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

import { HeadersComponent } from '../app/shared/component/layout/headers/headers.component';
import { FootersComponent } from '../app/shared/component/layout/footers/footers.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ButtonModule,
    CardModule,
    HeadersComponent,
    FootersComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ToaseenPrimeNG';
  
}
