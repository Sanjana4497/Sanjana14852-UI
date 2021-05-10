import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpComponent } from './emp/emp.component';
import { ProjectappService } from './projectapp.service';
import { ServiceLinesComponent } from './service-lines/service-lines.component';
import { CustomersComponent } from './customers/customers.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HighlightDirective } from './highlight.directive';
import { SummaryPipe } from './summary.pipe';


@NgModule({
  declarations: [
    AppComponent,
    EmpComponent,
    ServiceLinesComponent,
    CustomersComponent,
    AboutUsComponent,
    HighlightDirective,
    SummaryPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [ProjectappService],
  bootstrap: [AppComponent]
})
export class AppModule { }
