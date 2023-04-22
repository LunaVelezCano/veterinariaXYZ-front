import { Component } from '@angular/core';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AppRoutingModule{

constructor(  private route: ActivatedRoute,
  private router: Router){}

}
