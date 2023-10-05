import { Component } from '@angular/core';
import { TaskList } from '../../model/task-list';
import { first, last } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  public taskList: Array<TaskList> = JSON.parse(localStorage.getItem("list") || '[]')

  public deleteItemTaskList(index: number){
    this.taskList.splice(index, 1)
  }

  public deleteAllTasks(){
    const confirm = window.confirm("Você deseja apagar todas as tasks?")
    if(confirm)
      this.taskList = []
  }

  public setEmitTaskEmit(event: string){
    this.taskList.push({task: event,checked: false})
  }

  public validateInput(event: string, index: number){
    if(event.length){
      const confirm = window.confirm("A task está vazia, deseja deletar?")
      if(confirm)
        this.deleteItemTaskList(index)
    }
  }

  public setLocalStorage(){
    if(this.taskList){
      this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked))
      localStorage.setItem("list", JSON.stringify(this.taskList))
    }
  }

  ngDoCheck(){
    this.setLocalStorage()
  }

}
