import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SpinnerLoaderService } from '@services/spinner-loader.service';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Injectable()
export class SpinnerLoaderInterceptor implements HttpInterceptor {

  constructor(
    private spinnerLoaderSvc: SpinnerLoaderService
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.spinnerLoaderSvc.show();
    return next
      .handle(request)
      .pipe(
        finalize(() => this.spinnerLoaderSvc.hide())
      );
  }
}
