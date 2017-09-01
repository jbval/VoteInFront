import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterializeModule } from "angular2-materialize";
import { routes } from './app.router';
import { FormsModule } from '@angular/forms'; 
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PollComponent} from './poll/poll.component';
import { CreatePollComponent } from './poll/create/createPoll.component';
import { VotePollComponent } from './poll/vote/votePoll.component';
import { MajorityComponent } from './poll/vote/majority/majority.component';

import { ScrutinApiService } from './services/api/scrutinApi.service';
import { ModeScrutinApiService } from './services/api/modeScrutinApi.service';
import { SharedService } from './services/shared.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PollComponent,
    MajorityComponent,
    CreatePollComponent,
    VotePollComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MaterializeModule.forRoot(),
    routes
  ],
  providers: [ScrutinApiService,ModeScrutinApiService,SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
