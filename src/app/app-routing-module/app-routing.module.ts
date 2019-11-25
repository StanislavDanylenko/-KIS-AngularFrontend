import {NgModule} from '@angular/core';
import {UserFormComponent} from '../user-form/user-form.component';
import {UserListComponent} from '../user-list/user-list.component';
import {RouterModule, Routes} from '@angular/router';
import {ModalInputComponent} from '../modal-input/modal-input.component';

const routes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'adduser', component: UserFormComponent },
  { path: 'updateuser/:id', component: UserFormComponent },
  { path: 'modal/:operation', component: ModalInputComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
