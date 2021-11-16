import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { OrganisationListComponent } from './Components/organisation-list/organisation-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './Module/material/material.module';
import { FormsModule } from '@angular/forms';
import { DisableFormComponent } from './Components/disable-form/disable-form.component';
import { DisableServiseService } from './Services/disable-servise.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { ListGrpOgranisationComponent } from './Components/list-grp-ogranisation/list-grp-ogranisation.component';


@NgModule({
  declarations: [
    AppComponent,
    OrganisationListComponent,
    DisableFormComponent,
    ListGrpOgranisationComponent

  ],
  imports: [
    BrowserModule,HttpClientModule, BrowserAnimationsModule,MaterialModule,FormsModule,ReactiveFormsModule,BrowserAnimationsModule,ToastrModule.forRoot()
  ],
  providers: [DisableServiseService],
  bootstrap: [AppComponent],
  entryComponents :[DisableFormComponent,ListGrpOgranisationComponent]
})
export class AppModule { }
