import { Component, OnInit } from '@angular/core';
import { ModalContentComponent } from '../modal-content/modal-content.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})
export class OrderPageComponent implements OnInit {
  user: any = {};
  newUser: any = {};
  DelPerson: any
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

// for opening pop-up for new order
  openModal() {
    const modalRef = this.modalService.open(ModalContentComponent);
    modalRef.componentInstance.newUser = this.newUser;
  }

// for opening pop-up for prefilled fields to update
  EditUser(arg) {
    this.user = arg;
    if (arg) {
      this.openModal1(arg) // send the pirticular user details for editing
    }
  }

  //opening pop-up with pre-filled order data
  openModal1(arg) {
    const modalRef = this.modalService.open(ModalContentComponent);
    modalRef.componentInstance.user = arg;
  }

  //to get user name
  getUsername(arg) {
    this.DelPerson = arg
  }
  //for deleting order
  confirmDel() {
    this.DelPerson;
    for (let i = 0; i < this.Orders.length; i++) {
      if (this.Orders[i].name === this.DelPerson) {
        this.Orders.splice(0, 1);
        return false
      }
    }
  }
  //static data 
  Orders = [
    { date: '23-4-2019', name: 'priyatham', address: 'Hyderabad', phone: 111111111, total: 45000 },
    { date: '26-4-2019', name: 'krishna', address: 'Ongole', phone: 2222222222, total: 18000 },
    { date: '12-7-2019', name: 'John', address: 'vizag', phone: 3333333333, total: 35000 },
    { date: '21-9-2019', name: 'sujith', address: 'Warangal', phone: 4444444444, total: 56000 },
    { date: '16-11-2019', name: 'nagarjuna', address: 'Delhi', phone: 5555555555, total: 74000 },
    { date: '05-4-2019', name: 'siva', address: 'Mumbai', phone: 6666666666, total: 60000 },
    { date: '11-2-2019', name: 'kumar', address: 'Chennai', phone: 7777777777, total: 11000 },
    { date: '9-1-2019', name: 'harish', address: 'Banglore', phone: 8888888888, total: 28000 },
    { date: '6-6-2019', name: 'teja', address: 'pune', phone: 9999999999, total: 81000 },
    { date: '11-5-2019', name: 'anil', address: 'Vijaywada', phone: 9988776655, total: 4000 }
  ]

}
