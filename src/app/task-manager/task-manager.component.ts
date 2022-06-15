import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css']
})
export class TaskManagerComponent  {
// var taskData = {  
// taskName : string = '';
// status: string = 'Not Started';
// added: boolean=false;
// }

public taskData =[];
public taskName='';
public status='';
getTaskName(event){
this.taskName=event.target.value;
}
getStatus(event){
  this.status=event.target.value;
}
onAddClick(){
let obj={
  taskName:this.taskName,
  status:this.status
}
this.taskData.push(obj);

}
onDeleteButton(taskName){
  let result = this.taskData.filter((TASK) => TASK.taskName !== taskName);
    this.taskData = result;
}
}
