import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AlertType } from '../shared/interfaces/alert.type.interface';

@Injectable({
  providedIn: 'root'
})
export class AlertNotification {

    public static INFO = 'info';
    public static SUCCESS = 'success';
    public static WARNING = 'warning';
    public static ERROR = 'error';
    
    private basicOptions = {
        timeOut: 2000,
        progressBar: false,
        closeButton: true
    };

    private availableTypes = ['info','success','error','warning'];

    constructor(private toast: ToastrService) { }
    

    public showAlertByType (type: string, title: string, message: string, options?: any): void {
        if (this.availableTypes.includes(type)) {
            (this.toast as any)[type](message, title, {...this.basicOptions, ...options});
        }
    }


    public showInfo(title: string, message: string, options?: any): void {
        this.showAlertByType('info', title, message, options);
    }

    public showSuccess(title: string, message: string, options?: any): void {
        this.showAlertByType('success', title, message, options);
    }

    public showError(title: string, message: string, options?: any): void {
        this.showAlertByType('error', title, message, options);
    }

    public showWarning(title: string, message: string, options?: any): void {
        this.showAlertByType('warning', title, message, options);
    }

    
}
