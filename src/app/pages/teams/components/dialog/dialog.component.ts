import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'dialog-teams',
  templateUrl: './dialog.component.html',
  // styleUrls: ['./dialog.component.css']
})
export class DialogTeamsComponent {
  
  constructor(
    public dialogRef: MatDialogRef<DialogTeamsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  

}
