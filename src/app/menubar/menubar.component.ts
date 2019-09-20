import { Component, OnInit } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';



@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {

  isCollapsed = true;
  faGithub = faGithub;
  faLinkedinIn = faLinkedinIn
  
  constructor() { }

  ngOnInit() {
  }

}
