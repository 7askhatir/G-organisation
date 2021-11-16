import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toastr:ToastrService) { }
  deletNotification(){
     this.toastr.error("cccccccccccc","bbbbbbb",{
      progressBar	:true,
      progressAnimation:'increasing',
      onActivateTick	:true
     })
  }
  updateNotification(){
    this.toastr.success("yeeeeeeeeeeeees","dddd",{
      progressBar	:true,
      progressAnimation:'increasing',
      onActivateTick	:true
    })
  }
}
