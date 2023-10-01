import { Component } from '@angular/core';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap"
import { ModalContentComponent } from "../modal-content/modal-content.component"

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent {

    numberToAddThreeTo: number = 2 // This is the default value

    constructor(private modalService: NgbModal) {

    }

    openModal() {
        this.modalService.open(ModalContentComponent)
    }
}
