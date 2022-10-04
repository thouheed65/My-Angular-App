import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyReactiveFormComponent } from './my-reactive-form/my-reactive-form.component';

const routes: Routes = [
  {path : 'Reactive', component : MyReactiveFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
