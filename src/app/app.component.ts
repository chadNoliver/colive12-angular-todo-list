import { Component, OnInit } from '@angular/core';
import { Task } from "../classes/task";
import { User } from "../classes/user";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  user:any = new User();
  task:any;
  tasks:any[] = [] ;
  userList:any[] = [];  
  newTask(){
    let task = new Task();
    this.user.tasks.push(task);
    this.saveUsers();
  }
     
  ngOnInit(){
    this.loadUsers();
    this.findUser();
  }

  findUser(){
    console.log("finding users");
    for (let i = 0;i<this.userList.length;i++){
      if (this.userList[i].name==this.user.name){
          console.log("found match");
          this.user = this.userList[i];
          return;
      }
    }
    this.userList.push(this.user);
    return;
  }
  
  loadUsers(){
    console.log("loading users");
    
    let loadedUserList = window.localStorage.getItem('userList')||"[]";
    if(JSON.parse(loadedUserList).length>0){
      this.userList = JSON.parse(loadedUserList);
    }
    console.log(loadedUserList); 
  }

  saveUsers(){
    console.log("saving users");
    let stringifiedUserList = JSON.stringify(this.userList);
    console.log(stringifiedUserList);
    window.localStorage.setItem("userList", stringifiedUserList);
  }
}

