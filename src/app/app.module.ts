import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterializeModule } from 'ng2-materialize';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { routes } from './app.router';
import { AboutComponent } from './about/about.component';
import { PollComponent} from './poll/poll.component';
import { CreatePollComponent } from './poll/create/createPoll.component';
import { VotePollComponent } from './poll/vote/votePoll.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PollComponent,
    CreatePollComponent,
    VotePollComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterializeModule.forRoot(),
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
