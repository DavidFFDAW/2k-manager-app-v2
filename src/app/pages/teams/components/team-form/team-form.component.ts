import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: "app-team-form",
    templateUrl: "./team-form.component.html",
    styleUrls: ["./team-form.component.scss"]
})
export class TeamFormComponent {
    // public teamForm: FormControl;

    constructor(private fb: FormControl) {
        
    }

    public submit(): void {
        // console.log(this.teamForm.value);
    }
}