import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  // getUsers() {
  //   return this.http.get('https://jsonplaceholder.typicode.com/users')
  // }

  getPosts() {
    return this.http.get('http://localhost:1234/quotes')
  }

  setPosts(user){
    console.log(user)
    return this.http.post('http://localhost:1234/quotes/create', {name: user.name, quote:user.quote})
  }
}
