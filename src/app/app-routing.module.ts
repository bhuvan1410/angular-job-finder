import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CreateJobComponent } from './create-job/create-job.component';
import { ViewJobsComponent } from './view-jobs/view-jobs.component';
import { CreateArticleComponent } from './create-article/create-article.component';
import { ViewArticlesComponent } from './view-articles/view-articles.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'create-job', component: CreateJobComponent, data: { fullScreen: true } },
  { path: 'view-jobs', component: ViewJobsComponent, data: { fullScreen: true } },
  { path: 'create-article', component: CreateArticleComponent, data: { fullScreen: true } },
  { path: 'view-articles', component: ViewArticlesComponent, data: { fullScreen: true } },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}