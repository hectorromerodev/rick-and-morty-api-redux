import { Component } from '@angular/core';
import { SpinnerLoaderService } from '@services/spinner-loader.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-spinner-loader',
  templateUrl: './spinner-loader.component.html',
  styleUrls: ['./spinner-loader.component.scss']
})
export class SpinnerLoaderComponent {
  isLoading$: Subject<boolean> = this.spinnerLoaderSvc.isLoading$;
  constructor(private spinnerLoaderSvc: SpinnerLoaderService) { }
}
