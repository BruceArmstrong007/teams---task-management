import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TaskService } from './task.service';
import {MatDialog} from '@angular/material/dialog';
import { AddTaskComponent } from './add-task/add-task.component';

import { FormControl, Validators } from '@angular/forms';

export interface dataTable {
  Task: string,
  Person: string,
  Status: string,
  Tags: string[],
  ID : string
}

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  tags : any;
  statusControl = new FormControl([]);
  statusList : string[] = ['Pending','Work in Progress','Finished'];
  displayedColumns: string[] = ['No', 'ID', 'Task','Person','Status','Tags','Delete'];
  filterPredicate : any;
  dataSource : any;

  @ViewChild(MatPaginator, { static: false }) paginator?: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort?: MatSort;

  constructor(private task : TaskService,public dialog: MatDialog) {

   }

   ngAfterViewInit() {
     this.getTask();
     this.getTags();
  }

getTags(){
  this.task.displayTags().subscribe(
    (res)=>{
      this.tags = res;
    },
    (err)=>{
      console.log(err)
    }
   )
}

  getTask(){
    this.task.displayTask().subscribe(
      (res)=>{
        this.dataSource = new MatTableDataSource(res);

    this.filterPredicate = this.dataSource.filterPredicate;
    this.dataSource.paginator = this.paginator || null;
    this.dataSource.sort = this.sort || null;
      },
      (err)=>{
        console.log(err)
      }
     )
  }

  ngOnInit(): void {

  }

  addTag(element: any){
    if(element.Tags != '' && element.Tags.charAt(0) == '#'){
      this.task.changeTags(element).subscribe(
        (res)=>{
      console.log(res)
        },
        (err)=>{
          console.log(err)
        }
       )
    }

  }

  statusChange(val : String,element : any){
    element['Status'] = val;
 this.task.changeStatus(element).subscribe(
  (res)=>{
console.log(res)
  },
  (err)=>{
    console.log(err)
  }
 )
  }

  addTask(){
      const dialogRef = this.dialog.open(AddTaskComponent, {
        width: '350px',
        data: {},
      });

      dialogRef.afterClosed().subscribe(result => {
        this.task.addTask(result).subscribe(
          (res)=>{
        console.log(res)
        this.dataSource.data.push(result);
         this.dataSource._updateChangeSubscription();
          },
          (err)=>{
            console.log(err)
          }
         )
      });
  }

  deleteTask(element:any){
this.task.deleteTask(element).subscribe(
  (res)=>{
console.log(res)
const index = this.dataSource.data.indexOf(element.ID);
this.dataSource.data.splice(index, 1);
this.dataSource._updateChangeSubscription();
  },
  (err)=>{
    console.log(err)
  }
 )
  }

  // onStatusRemoved(status : string){
  //   const statuss = this.statusControl.value as string[];
  //   this.removeFirst(statuss, status);
  //   this.statusControl.setValue(statuss); // To trigger change detection
  // }

  // private removeFirst<T>(array: T[], toRemove: T): void {
  //   const index = array.indexOf(toRemove);
  //   if (index !== -1) {
  //     array.splice(index, 1);
  //   }
  // }
}
