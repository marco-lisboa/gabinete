import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGaurd implements CanActivate {

    constructor(
        private router: Router,
        private auth: AuthService
    ) { }

    canActivate() {
        console.log(this.auth.checkAuth())
        if (this.auth.checkAuth()) {
            return true;
        } else {
            this.router.navigate(['/auth']);
            return false;
        }
    }
}
