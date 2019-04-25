import { Component, OnInit, Input} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.css']
})
export class ModalContentComponent implements OnInit {
  @Input() public user: any = {}; //importing order data from orderpage
  @Input() public newUser: any = {};// importing empty obj for new order
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {

  }

}
