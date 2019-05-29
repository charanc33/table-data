import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from './table.component';
import { TableDataComponent } from './table-data/table-data.component';

const routes: Routes = [
  
    {
    path:"table-data",
    component:TableDataComponent

    },
    {
      path:"",
      component:TableComponent
    }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableRoutingModule { }
