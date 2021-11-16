import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,MatToolbarModule,MatTableModule,MatIconModule,MatProgressSpinnerModule,MatPaginatorModule,MatSortModule,MatInputModule,
    MatGridListModule,MatFormFieldModule,MatRadioModule,MatSelectModule,MatDialogModule,MatCheckboxModule,BrowserAnimationsModule
  ],
  exports: [
    MatToolbarModule,MatTableModule,MatIconModule,MatProgressSpinnerModule,MatPaginatorModule,MatSortModule,MatInputModule,MatGridListModule,
    MatFormFieldModule,MatRadioModule,MatSelectModule,MatDialogModule,MatCheckboxModule,BrowserAnimationsModule
  ]
})
export class MaterialModule { }
