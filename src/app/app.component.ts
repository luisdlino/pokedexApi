import { Component, ViewEncapsulation } from '@angular/core';
import { LoadingService } from './services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  isLoading = true;

  constructor(private loadingService: LoadingService) {
    loadingService.getLoad().subscribe(load => {
      this.isLoading = load;
    })
  }
}
