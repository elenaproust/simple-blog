import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../model/post';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input()post: Post;
  constructor() { }

  ngOnInit() {
  }
  getLoveIts() {
    return this.post.loveIts;
  }

  getColor() {
    if ( this.getLoveIts() > 0) {
      return 'green';
    } else if ( this.getLoveIts() < 0) {
      return 'red';
    }
  }
  onClickLoveIt() {
    this.post.loveIts++;
  }

  onClickDontLoveIt() {
    this.post.loveIts--;
  }
}
