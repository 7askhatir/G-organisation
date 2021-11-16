import { Component, OnInit ,ViewChild } from '@angular/core';
import { OrganisationServiceService } from 'src/app/Services/organisation-service.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DisableFormComponent } from '../disable-form/disable-form.component';
import { NotificationService } from 'src/app/Services/notification.service';
import { ListGrpOgranisationComponent } from '../list-grp-ogranisation/list-grp-ogranisation.component';
@Component({
  selector: 'app-organisation-list',
  templateUrl: './organisation-list.component.html',
  styleUrls: ['./organisation-list.component.css']
})
export class OrganisationListComponent implements OnInit {

  constructor(private organisationService:OrganisationServiceService,private matDialog:MatDialog,private notification:NotificationService) { }
  listData!: MatTableDataSource<any>;
  displayedColumns:string[]=['more','name','location','domain','website','actions']
  @ViewChild(MatSort)
  sort: MatSort = new MatSort;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  searchkey!: String;
  ngOnInit(): void {
    this.getOrganisations();
  }
  getOrganisations(){
   this.organisationService.findAll().subscribe(response=>{
     this.listData=new MatTableDataSource(response.data);
     this.listData.sort=this.sort;
     this.listData.paginator=this.paginator;
   })
  }
  onSearchClear(){
    this.searchkey="";
    this.filter();
  }
  filter(){
    this.listData.filter=this.searchkey.trim().toLowerCase()
  }
  disable(id:String){
    console.log(id)
    const matDialogConfig=new MatDialogConfig()
    matDialogConfig.autoFocus=true
    matDialogConfig.width="40%"
    this.matDialog.open(DisableFormComponent,{data:{
      id:id
    }});
  }
  delet(id :String){
    console.log(id)
    this.organisationService.deletById(id)
    .subscribe(()=>{
      this.listData.data=this.listData.data.filter(data=>data.id!=id)
    })
    this.notification.deletNotification();
  }
  openDialog(id:string){
    
    const dialogRef = this.matDialog.open(ListGrpOgranisationComponent,{
      data:{id:id}
    });
  }
  

}
