export class User {
  name: any= "";
  tasks:Task[] = [];
  constructor(){
    this.name = prompt("Hello! Please enter your name.","");
    this.tasks= [];
  }
}
