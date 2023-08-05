import { Component, OnInit } from '@angular/core';
import { JobService } from '../job.service';

@Component({
  selector: 'app-view-jobs',
  templateUrl: './view-jobs.component.html',
  styleUrls: ['./view-jobs.component.css'],
})
export class ViewJobsComponent implements OnInit {
  jobs: any[] = [];

  constructor(private jobService: JobService) {}

  ngOnInit() {
    this.jobs = this.jobService.getJobs();
  }

  toggleEditMode(job: any) {
    job.editMode = !job.editMode;
  }

  deleteJob(index: number) {
    this.jobs.splice(index, 1);
  }
}
