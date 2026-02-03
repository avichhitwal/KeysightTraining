import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-task-item',
  selector: 'app-root',
  standalone: false,
  templateUrl: './task-item.html',
  styleUrl: './task-item.css',
})


export class TaskItem implements OnInit{

 ngOnInit(): void {
   this.title = "Module";
   this.description = "Desc";
   this.city = "DL";
 }

 public title! : string;
 public description!: string;
 public city!: string;
 
 isShow: boolean = true;
 role:string='normal';
 movie_title:string = "Top 4 movies";

 isHighlighted:boolean=true;
 isItalic:boolean=true;
 textColor:string='blue';
 fontSize:number=18;
 isActive:boolean=true;
 isDisabled:boolean=false;
 username:string='';
 
 movies : Movie[] = [
  {
    title : "Titanic",
    director : "ABC",
    cast : "person1, person2",
    releaseDate: "20th Oct 1990"
  },
  {
    title : "Jurrasic Park",
    director : "MNP",
    cast : "person3, person4",
    releaseDate: "13th Oct 1989"
  },
  {
    title : "SpiderMan",
    director : "ABCDEF",
    cast : "person1, person4",
    releaseDate: "20th May 2000"
  }
 ]
}
 
class Movie{
  title!: string;
  director! :string
  cast!: string;
  releaseDate!: string;
}