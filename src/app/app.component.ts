import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Post } from './post';
import { PostDialogComponent } from './post-dialog/post-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'meuapp';
  public post: Post[] = [
    new Post("Renan","Meu Post","Sub Renan","Renan@gmail.com","Minha msg"),
    new Post("Kauan","Post Kauan","Sub Kauan","Kauan@gmail.com","Msg Kauan"),
    new Post("Rafael","Post Rafael","Sub Rafael","Rafael@gmail.com","Msg Rafael"),

    new Post("Renan","Meu Post","Sub Renan","Renan@gmail.com","Minha msg"),
    new Post("Kauan","Post Kauan","Sub Kauan","Kauan@gmail.com","Msg Kauan"),
    new Post("Rafael","Post Rafael","Sub Rafael","Rafael@gmail.com","Msg Rafael"),
    
    new Post("Renan","Meu Post","Sub Renan","Renan@gmail.com","Minha msg"),
    new Post("Kauan","Post Kauan","Sub Kauan","Kauan@gmail.com","Msg Kauan"),
    new Post("Rafael","Post Rafael","Sub Rafael","Rafael@gmail.com","Msg Rafael"),
  ];

  constructor(public dialog:MatDialog){

  }
  openDialog(){
    const dialogRef = this.dialog.open(PostDialogComponent,{
      width:'600px'
    }); 
  }
}
