import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit {
  name: any;
  items = [
    {
      name: "Raket",
      price: 1000
    },
    {
      name: "Mouse",
      price: 2000
    },
    {
      name: "Monitor",
      price: 5000
    },
    {
      name: "Keyboard",
      price: 3000
    },
    {
      name: "Tumbler",
      price: 7000
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
