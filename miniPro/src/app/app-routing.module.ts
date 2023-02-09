import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookCreateComponent } from './books/book-create/book-create.component';
import { BookListComponent } from './books/book-list/book-list.component';

const routes: Routes = [
  {path:'',component:BookListComponent},
  {path:'create',component:BookCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
