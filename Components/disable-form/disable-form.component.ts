import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OrganizationReason } from 'src/app/enums/organization-reason';
import { DisableServiseService } from 'src/app/Services/disable-servise.service';
import { NotificationService } from 'src/app/Services/notification.service';
import { OrganisationServiceService } from 'src/app/Services/organisation-service.service';
import { OrganisationListComponent } from '../organisation-list/organisation-list.component';
@Component({
  selector: 'app-disable-form',
  templateUrl: './disable-form.component.html',
  styleUrls: ['./disable-form.component.css']
})
export class DisableFormComponent implements OnInit {
    
 public orgas=OrganizationReason;
  formg : FormGroup = new FormGroup({});
  id!:String;

  constructor(private service:DisableServiseService, private fb : FormBuilder,public dialogRef:MatDialogRef<OrganisationListComponent>,
    @Inject(MAT_DIALOG_DATA)public data:any,public organisationService : OrganisationServiceService,private notification:NotificationService) { }
  ngOnInit(): void {
    this.id=this.data.id;
    this.formg =this.fb.group({
      reason : ['', Validators.required],
      status : [false,Validators.required],
      isPermanent : [false, Validators.required],
      date : [new Date(), Validators.required],
      description:[this.data.id,Validators.minLength]
    });
  }
  disableByid(id:String){
    if(this.formg.value.reason!=''){
      this.organisationService.addDisableInOrganisation(id,this.formg.value).subscribe(response=>{
        this.dialogRef.close();
    })
    this.notification.updateNotification();
    }
    else{
      this.notification.deletNotification();
    }
    
  }

}
