import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateThoughtComponent } from './components/thought/create-thought/create-thought.component';
import { ListThoughtComponent } from './components/thought/list-thought/list-thought.component';
import { DeleteThoughtComponent } from './components/thought/delete-thought/delete-thought.component';
import { EditThoughtComponent } from './components/thought/edit-thought/edit-thought.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listThought',
    pathMatch: 'full'
  },
  {
    path: 'createThought',
    component: CreateThoughtComponent
  },
  {
    path: 'listThought',
    component: ListThoughtComponent
  },
  {
    path: 'thoughts/deleteThought/:id',
    component: DeleteThoughtComponent
  },
  {
    path: 'thoughts/editThought/:id',
    component: EditThoughtComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
