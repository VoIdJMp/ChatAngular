import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginFormComponent} from './login-form/login-form.component';
import {ChatFormComponent} from './chat-form/chat-form.component';


const appRoutes: Routes = [{ path: '', component: LoginFormComponent },
                           { path: 'home', component: ChatFormComponent }];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
