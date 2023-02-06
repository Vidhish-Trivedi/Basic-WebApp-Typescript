// Any class which implements/satisfies the Mappable interface can be an argument to addMarker() method.
interface Mappable{
    getLocation(): {lat: number, lng: number};
};

export class CustomMap{
    private googleMap: google.maps.Map;

    constructor(divId: string) {
        this.googleMap = new google.maps.Map(document.getElementById(divId), {zoom: 1, center: {lat: 0, lng: 0}});
    };

    // Implementation using Interfaces and dependency inversion principles.
    addMarker(obj: Mappable): void {
        let tmp_loc = obj.getLocation();
        new google.maps.Marker({map: this.googleMap, position: tmp_loc});
    };
};
