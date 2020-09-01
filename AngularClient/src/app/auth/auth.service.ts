import { Injectable } from '@angular/core';
import { UserManager, UserManagerSettings } from 'oidc-client';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userManager:UserManager;
  constructor() { 
      var settings = {
        authority: 'https://localhost:5001',
        client_id: 'js',
        redirect_uri: 'http://localhost:4200/callback',
        automaticSilentRenew: true,
        silent_redirect_uri: 'http://localhost:4200/assets/silent-refresh.html',
        response_type: 'code',
        scope: 'openid profile api1',
        loadUserInfo: true,
        response_mode: "query"
    };
    this.userManager = new UserManager(settings);
  }

  redirectToLogin() {
    this.userManager.signinRedirect();
  }

  callback(){
    this.userManager.signinRedirectCallback().then(function(user){
      console.log(user);
    });
  }
}
