import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-career-map',
    templateUrl: './career-map.component.html',
    styleUrls: ['./career-map.component.scss']
})
export class CareerMapComponent implements OnInit {

    defaultView: boolean = true;
    selectedValue: string = "";
    srSysSpecialist: boolean = false;
    solutionArchitect: boolean = false;
    projectMananger: boolean = false;
    role: string = "";
    constructor() { }

    ngOnInit(): void {

    }

    exploreCareerPath() {
        this.defaultView = false;
        this.role = "";
        this.solutionArchitect = this.srSysSpecialist = this.projectMananger = false;
        if (this.selectedValue === "1") {
            this.srSysSpecialist = true;
            this.role = "Sr. System Specialist";
        } else if (this.selectedValue === "2") {
            this.solutionArchitect = true;
            this.role="Solutions Architect";
        } else if (this.selectedValue == "3") {
            this.projectMananger = true;
            this.role = "Project Manager";
        } else {
            this.defaultView = true;
        }
    }


}
