import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { CustomersComponent } from './customers/customers.component';
import { EmpComponent } from './emp/emp.component';
import { ServiceLinesComponent } from './service-lines/service-lines.component';

const routes: Routes = [
  {path:"",component:EmpComponent},
  {path:"",component:ServiceLinesComponent},
  {path:"",component:AboutUsComponent},
  {path:"",component:CustomersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
