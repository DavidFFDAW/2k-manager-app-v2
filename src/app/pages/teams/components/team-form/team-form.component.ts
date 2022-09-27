import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { TeamsService } from 'src/app/services/teams.service';
import { WrestlerService } from "src/app/services/wrestler.service";
import { WrestlerInterface } from 'src/app/shared/interfaces/common.interfaces';
import { SnackBarService } from "src/app/services/snack.bar.service";
import { routes } from 'src/app/consts/routes';
import { Router } from '@angular/router';


@Component({
    selector: "app-team-form",
    templateUrl: "./team-form.component.html",
    styleUrls: ["./team-form.component.css"]
})
export class TeamFormComponent implements OnInit {
    public routers: typeof routes = routes;

    private teamForm: FormGroup;
    private nameValidator = [ Validators.required, Validators.minLength(3) ];
    public originalWrestlers: WrestlerInterface[] = [];
    private members: { id: number; name: string; sex: string; }[] = [];

    constructor(
        private fb: FormControl,
        private wrestlerService: WrestlerService,    
        private teamService: TeamsService,
        private snackBar: SnackBarService,        
        private router: Router,
    ) {
        this.teamForm = new FormGroup({
            name: new FormControl('', this.nameValidator),
            average: new FormControl('', this.passwordValidators),
            member: new FormControl(''),
          });
    }

    ngOnInit () {
        this.wrestlerService.findAll().subscribe({
            next: (response: WrestlerInterface[]) => {
                console.log(response);
                this.originalWrestlers = response.data;
            },
            error: (err) => {
              this.snackBar.showSnackBar('Ha ocurrido un error: ' + err.message);
            }
        });
    }


    getForm() {
        return this.teamForm;
    }

    isFormValid() {
        return this.teamForm.valid();
    }

    validateAndTryLogin() {
        if (!this.isFormValid()) return this.snackBar.showSnackBar('Por favor, rellena correctamente los campos');
        const datas = {
            name: this.teamForm.get('name')?.value,
            average: this.teamForm.get('average')?.value,
            members: this.members,
        };

        this.teamsService.createTeam(datas).subscribe(
            (resp: any) => {
                this.router.navigate([this.routers.TEAMS]);
            }
        );
    }

    public submit(): void {
        // console.log(this.teamForm.value);
    }
}