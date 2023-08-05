import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css'],
})
export class CreateArticleComponent implements OnInit {
  articleForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder, private articleService: ArticleService) {}

  ngOnInit() {
    this.articleForm = this.formBuilder.group({
      author: ['', Validators.required],
      article: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.articleForm.valid) {
      this.articleService.addArticle(this.articleForm.value);
      this.articleForm.reset();
    }
  }
}
