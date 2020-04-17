import { Injectable } from "@angular/core";
import { UserSettings } from "../user-settings-form/user-settings";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class DataService {
  postUserSettingsForm(userSettings: UserSettings): Observable<UserSettings> {
    return of(userSettings);
  }
}
