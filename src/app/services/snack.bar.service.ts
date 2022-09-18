import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AppSettings } from '../app.settings';


@Injectable({
    providedIn: 'root'
})
export class SnackBarService {

    constructor(private snackBar: MatSnackBar) { }

    public showSnackBar( message: string, duration: number = AppSettings.NOTIFICATIONS.DEFAULT_TIME): void {
        this.snackBar.open(message, 'Aceptar', {
            duration: duration,
            horizontalPosition: 'center',
            verticalPosition: 'top',
        });
    }
    
}