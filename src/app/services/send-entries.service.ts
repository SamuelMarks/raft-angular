import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

@Injectable()
export class SendEntriesService {
    private sendEntrySource = new Subject<string>();
    sendEntrySource$ = this.sendEntrySource.asObservable();

    sendEntry(entry: string): void {
        this.sendEntrySource.next(entry);
    }
}
