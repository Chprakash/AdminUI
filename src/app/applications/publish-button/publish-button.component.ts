import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publish-button',
  templateUrl: './publish-button.component.html',
  styleUrls: ['./publish-button.component.css']
})
export class PublishButtonComponent implements OnInit {

  private data : any;
  private params : any;
  constructor() { }

  ngOnInit() {
  }
  agInit(params){
    this.params=params.data;
    this.data=params.value;
  }

  publish(){
    window.open(this.params.url, '_blank');
  }
}
