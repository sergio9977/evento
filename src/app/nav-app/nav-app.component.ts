import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../login/core/auth.service';

@Component({
  selector: 'nav-app',
  templateUrl: './nav-app.component.html',
  styleUrls: ['./nav-app.component.css']
})
export class NavAppComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, public auth: AuthService) { }

}
