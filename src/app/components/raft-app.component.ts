import { Component } from "@angular/core";

import { Server } from '../model/server';
import { SendEntriesService } from '../services/send-entries.service';

@Component({
  selector: 'raft-app',
  styleUrls: ['../styles/raft-app.component.css'],
  templateUrl: '../templates/raft-app.component.html'
})
export class RaftApp {
  noOfServers: number = 0;
  servers: Server[] = [];
  userEntry!: string;
  allowUserEntries: boolean = false;

  createServers(): void {
    if (undefined !== this.noOfServers) {
      this.servers = [];
      for (let i: number = 0; i < this.noOfServers; i++) {
        let server: Server = new Server();
        server.id = i + 1;
        this.servers.push(server);
      }
    } else {
      alert("Enter some number");
    }
  }

  constructor(private sendEntriesService: SendEntriesService) {}

  sendEntriesToServers(): void {
    this.sendEntriesService.sendEntry(this.userEntry);
  }

  onLeaderElected(value: boolean): void {
    this.allowUserEntries = value;
  }
}
