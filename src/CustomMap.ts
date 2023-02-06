// Any class which implements/satisfies the Mappable interface can be an argument to addMarker() method.
interface Mappable{
    getLocation(): {lat: number, lng: number};
    markerContent(): string;
};

export class CustomMap{
    private googleMap: google.maps.Map;

    constructor(divId: string) {
        this.googleMap = new google.maps.Map(document.getElementById(divId), {zoom: 1, center: {lat: 0, lng: 0}});
    };

    // Implementation using Interfaces and dependency inversion principles.
    addMarker(obj: Mappable): void {
        let tmp_loc = obj.getLocation();
        const marker = new google.maps.Marker({map: this.googleMap, position: tmp_loc});
        
        marker.addListener("click", () => {
            const infoWindow_1 = new google.maps.InfoWindow({
                content: obj.markerContent()
            });

            infoWindow_1.open(this.googleMap, marker);
        });

    };
};
