import { Component, OnInit, Input, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { BlogPost } from '../blog-post';
import { BlogPostTileComponent } from '../blog-post-tile/blog-post-tile.component';
import { BlogDataService } from '../blog-data.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

    @ViewChildren('tile') blogPostTileComponents:QueryList<BlogPostTileComponent>;
    currentPage:number;
    posts:BlogPost[][];

  constructor(private blogDataService:BlogDataService) { }

  ngOnInit() {
    this.currentPage=0;
    this.posts= this.blogDataService.getData();
  }

  updatePage(newPage){
    console.log("Event emitted");
    this.currentPage=newPage;
  }

  expandAll(){
    this.blogPostTileComponents.
    forEach(e => e.showFullSummary());
  }
}
