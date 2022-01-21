import { Component, OnInit } from '@angular/core';
import { TagsService } from './tags.service';
@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
result : any;
  constructor(private tags : TagsService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.tags.display().subscribe(
      (res)=>{
        console.log(res)
       this.result = res;
      },
      (err)=>{
        console.log(err)
      }
     )
  }

  deleteTags(element:any){
    this.tags.delete(element).subscribe(
      (res)=>{
    console.log(res)
      },
      (err)=>{
        console.log(err)
      }
     )
      }

}
