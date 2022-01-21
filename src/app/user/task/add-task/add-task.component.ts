import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
task:String = '';
person:String= '';
id: String= '';
status:String= '';
tags: String= '';
  constructor(
    public dialogRef: MatDialogRef<AddTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
 ) {
this.status = 'Pending';
this.id =((Math.random() * (999 - 1) + 1).toFixed(0)).toString();
 }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  openDialog(){

  }

}
