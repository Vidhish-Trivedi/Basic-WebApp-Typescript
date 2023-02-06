import {User} from "./User";
import {Company} from "./Company";
import { CustomMap } from "./CustomMap";

const user_1 = new User();
const company_1 = new Company();
console.log(user_1);
console.log(company_1);

// const map_1 = new google.maps.Map(document.getElementById('map'), {zoom: 1, center: {lat: 0, lng: 0}});
const map_1 = new CustomMap("map");
map_1.addMarker(user_1);
