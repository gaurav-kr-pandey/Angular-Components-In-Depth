import { Component, OnInit, Input } from '@angular/core';
import { __importDefault } from 'tslib';
import { BlogPost } from '../blog-post';
import { TruncatePipe } from '../truncate.pipe';

@Component({
  selector: 'app-blog-post-tile',
  templateUrl: './blog-post-tile.component.html',
  styleUrls: ['./blog-post-tile.component.scss']
})
export class BlogPostTileComponent implements OnInit {

  fullSummary:string;
  expandSummary:boolean=false;

  @Input() post : BlogPost;
  constructor(private truncatePipe:TruncatePipe) { }

  ngOnInit() {
    this.fullSummary=this.post.summary;
    this.post.summary = this.truncatePipe.transform(this.fullSummary,30);
  }

  showFullSummary(){
    if (!this.expandSummary) {
      this.post.summary = this.fullSummary;
      this.expandSummary=!this.expandSummary;
    }
    else {
      this.post.summary = this.truncatePipe.transform(this.fullSummary, 30);
      this.expandSummary=!this.expandSummary;
    }
  }
}
