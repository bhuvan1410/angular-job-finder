import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JobService } from '../job.service';

@Component({
  selector: 'app-create-job',
  templateUrl: './create-job.component.html',
  styleUrls: ['./create-job.component.css'],
})
export class CreateJobComponent implements OnInit {
  jobForm!: FormGroup;

  constructor(private fb: FormBuilder, private jobService: JobService) {}

  ngOnInit() {
    this.initJobForm();
  }

  initJobForm() {
    this.jobForm = this.fb.group({
      title: ['', Validators.required],
      company: ['', Validators.required],
      description: ['', Validators.required],
      requirements: ['', Validators.required],
      wage: ['', Validators.required],
      state: ['', Validators.required],
      contactEmail: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    if (this.jobForm.valid) {
      this.jobService.addJob(this.jobForm.value);
      this.initJobForm(); 
    }
  }
}