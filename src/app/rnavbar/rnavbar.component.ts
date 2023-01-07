import { Component , ViewChild ,HostListener} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ChangeDetectorRef } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-rnavbar',
  templateUrl: './rnavbar.component.html',
  styleUrls: ['./rnavbar.component.scss']
})
export class RnavbarComponent {
  isMobile$ !: Observable<boolean>;

  @ViewChild('sidenav') sidenav !: MatSidenav;

  


  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.isMobile$ = this.breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.Small])
      .pipe(
        map(result => result.matches),
        shareReplay()
      );
  }
}
