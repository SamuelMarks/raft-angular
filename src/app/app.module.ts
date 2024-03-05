import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { RaftApp } from './components/raft-app.component';
import { SendEntriesService } from "./services/send-entries.service";
import { LeaderElectionService } from "./services/leader-election.service";
import { AppendEntriesService } from "./services/append-entries.service";
import { ServerComponent } from "./components/server.component";

@NgModule({
  declarations: [
    RaftApp, ServerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [LeaderElectionService, AppendEntriesService, SendEntriesService],
  bootstrap: [RaftApp]
})
export class AppModule { }
