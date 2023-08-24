import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-error-page',
  templateUrl: './errorPage.component.html',
  styleUrls: ['./errorPage.component.scss']
})
export class ErrorPageComponent implements OnInit{

  constructor(private loadingService: LoadingService) {}

  ngOnInit() {
    this.loadingService.setLoad(false);
   }
}
