import { Company } from "./Company";
import { User } from "./User";

export class CustomMap{
    private googleMap: google.maps.Map;

    constructor(divId: string) {
        this.googleMap = new google.maps.Map(document.getElementById(divId), {zoom: 1, center: {lat: 0, lng: 0}});
    };

    // A single method allowing addition of a marker for both User and Company instances.
    // Avoids code duplication.
    // Each class requires an import and method signature is huge. LIMITATION!
    // Inside this method, TS allows us to refer to the methods/attributes which are common to both User and Company classes. LIMITATION!
    addMarker(obj: User | Company): void {
        let tmp_loc = obj.getLocation();
        new google.maps.Marker({map: this.googleMap, position: tmp_loc});
    };
};
