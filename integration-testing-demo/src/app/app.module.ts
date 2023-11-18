import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { VoterComponent } from './voter/voter.component';
import { routes } from './app.routes';
import { TodosComponent } from './todos/todos.component';
import { HttpClientModule } from '@angular/common/http';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersComponent } from './users/users.component';
@NgModule({
  declarations: [AppComponent, VoterComponent, TodosComponent, UserDetailsComponent, UsersComponent],
  imports: [RouterModule.forRoot(routes), BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
