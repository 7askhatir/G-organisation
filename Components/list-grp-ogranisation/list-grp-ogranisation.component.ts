import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { OrganizationGroupService } from 'src/app/Services/organization-group.service';


@Component({
  selector: 'app-list-grp-ogranisation',
  templateUrl: './list-grp-ogranisation.component.html',
  styleUrls: ['./list-grp-ogranisation.component.css']
})
export class ListGrpOgranisationComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA)public data:any,private grpOrgaServise:OrganizationGroupService) { }
  displayedColumns: string[] = ['#', 'Group d organisation', 'Signers', 'Recipients','Verifiers'];
  listData!: MatTableDataSource<any>;

  ngOnInit(): void {
    this.findAllGrpOrganisation(this.data.id);
  }
  findAllGrpOrganisation(id:string){
        this.grpOrgaServise.findOrganisationGrpByOrganisation(id).subscribe(
          response=>{
            this.listData=new MatTableDataSource(response.data);
          }
        )
  }

}
