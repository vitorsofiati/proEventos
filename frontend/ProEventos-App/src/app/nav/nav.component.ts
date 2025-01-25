import { Component, OnInit } from '@angular/core';
import { CollapseModule } from 'ngx-bootstrap/collapse';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  imports: [CollapseModule],
})
export class NavComponent implements OnInit {
  isCollapsed = true;
  collapse = this.isCollapsed;
  constructor() {}

  ngOnInit() {}
}
