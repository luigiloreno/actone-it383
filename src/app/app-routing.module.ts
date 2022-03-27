import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserFormComponent } from './user-form/user-form.component';
import { UserTwoComponent } from './user-two/user-two.component';

const routes: Routes = [
  { path: 'user-form', component: UserFormComponent },
  { path: 'user-two', component: UserTwoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [UserFormComponent, UserTwoComponent]
