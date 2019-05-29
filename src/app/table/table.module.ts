import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableRoutingModule } from './table-routing.module';
import { TableComponent } from './table.component';
import { TableDataComponent } from './table-data/table-data.component';
import { FirstDirectiveDirective } from '../first-directive.directive';
import { SearchPipePipe } from './search-pipe.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalsModule } from '../modal/modal.module';



@NgModule({
  declarations: [TableComponent, TableDataComponent,
       FirstDirectiveDirective, SearchPipePipe, 
],
  imports: [
    CommonModule,
    TableRoutingModule,
    FormsModule,
    ModalsModule,
    ReactiveFormsModule 

  ]
})
export class TableModule { }
