import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-say-hello',
  templateUrl: './say-hello.component.html',
  styleUrls: ['./say-hello.component.css']
})
export class SayHelloComponent implements OnInit {
  constructor(public route: ActivatedRoute) {
    console.log(route.snapshot);

  }

  ngOnInit() {
  }

}
