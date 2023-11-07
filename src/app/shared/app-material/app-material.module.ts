import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
    exports: [
      MatCardModule,
      MatTableModule,
      MatToolbarModule,
      MatProgressSpinnerModule,
      MatPaginatorModule
     ]
})

export class AppMaterialModule { }

