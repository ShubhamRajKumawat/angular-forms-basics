import { Injectable } from "@angular/core";
import { UserSettings } from "../user-settings-form/user-settings";
import { Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class DataService {

  constructor(private http: HttpClient){}

  getSubscriptionTypes(); observable<string[]> {
    
  }

  postUserSettingsForm(userSettings: UserSettings): Observable<any> {
    return this.http.post('https://putsreq.com/jQAcaclDlF10rtaLZ7Sv', userSettings);
  }
}
