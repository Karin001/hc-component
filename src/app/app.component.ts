import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IdentityService, IdentityInfo } from './core/identity.service';
import { take } from 'rxjs/operators'
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'zhuxiwen';
  constructor(router: Router, identityService: IdentityService) {
    identityService.identity
      .subscribe((identityInfo: IdentityInfo) => {
        switch (identityInfo.identity) {
          case environment.auth_status.visitor:
            router.navigateByUrl('/passport/auth/login')
            break;
          case environment.auth_status.lockUser:
            router.navigateByUrl('/passport/auth/reset-password');
            break;
          default:
            break;
        }
      })

  }
}
