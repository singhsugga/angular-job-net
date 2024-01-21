import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DefaultPageComponent } from './default-page/default-page.component';


@Component({
  standalone: true,
  imports: [RouterModule, DefaultPageComponent],
  selector: 'job-net-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'job-net-host';
}
