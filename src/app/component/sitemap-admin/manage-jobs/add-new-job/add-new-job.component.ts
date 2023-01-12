import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnInit,
  SimpleChanges,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-new-job',
  templateUrl: './add-new-job.component.html',
  styleUrls: ['./add-new-job.component.css'],
})
export class AddNewJobComponent implements OnInit {
  @Input() footerClass = null;
  @Input() firstButtonName = 'Cancel';
  @Input() secondButtonName = 'Save';
  @Input() firstButtonId = 'btnCancel';
  @Input() secondButtonId = 'btnSave';
  @Output() btnClickEmitter = new EventEmitter();
  @ViewChild('f') form!: ElementRef;

  addFormValue = {
    jobName: null,
    woNumber: null,
    customerName: null,
    siteName: null,
    contactPerson: null,
    email: null,
    phoneNumber: null,
    assignedTo: null,
    CAD: null,
    description: null,
  };

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    const data = { formData: this.addFormValue, buttonId: this.secondButtonId };
    this.btnClickEmitter.emit(data);
  }

  btnCancelClick(form) {
    form.resetForm();
  }
}
