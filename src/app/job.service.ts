import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class JobService {
  private jobs: any[] = [];

  constructor() {}

  addJob(job: any) {
    this.jobs.push(job);
  }

  getJobs() {
    return this.jobs;
  }

  deleteJob(index: number) {
    this.jobs.splice(index, 1);
  }
}
