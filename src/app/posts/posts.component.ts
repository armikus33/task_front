import { Component, OnInit,ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  @ViewChild('name') name;
  @ViewChild('quote') quote;

  post_name:any;
  post_quote:any;


  posts$: Object;

  constructor(private data: DataService,private router:Router) { }

  ngOnInit() {
    this.data.getPosts().subscribe(
      data => this.posts$ = data 
    )
  }
  

sendData(){

      let new_post  = {
      name:  this.name.nativeElement.value,
      quote: this.quote.nativeElement.value
      };

    this.data.setPosts(new_post).subscribe((response) => {
    console.log(response);
      });
      location.reload();
    }
}
