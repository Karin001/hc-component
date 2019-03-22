import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { startUpProvider } from './start-up';
import { ErrorHandleInterceptor } from './interceptors/error-handle.interceptor';
import { MockInterceptor } from './interceptors/mock-response.interceptor';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers:[
    startUpProvider,
    { provide: HTTP_INTERCEPTORS, useClass: ErrorHandleInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: MockInterceptor, multi: true }
  ]
})
export class CoreModule { }
