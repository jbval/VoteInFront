import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PollComponent } from './poll/poll.component';
import { CreatePollComponent } from './poll/create/createPoll.component';
import { VotePollComponent } from './poll/vote/votePoll.component';

export const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'poll', component: PollComponent },
    { path: 'poll/create', component: CreatePollComponent },
    { path: 'poll/:id', component: VotePollComponent },
];

export const routes: ModuleWithProviders = RouterModule.forRoot(appRoutes);