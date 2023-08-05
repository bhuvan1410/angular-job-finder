import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CreateArticleComponent } from './create-article/create-article.component';
import { CreateJobComponent } from './create-job/create-job.component';
import { ViewJobsComponent } from './view-jobs/view-jobs.component';
import { ViewArticlesComponent } from './view-articles/view-articles.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CreateArticleComponent,
    CreateJobComponent,
    ViewJobsComponent,
    ViewArticlesComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
