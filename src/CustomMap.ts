import { User } from './User'
import { Company } from './Company'

export class CustomMap {
	private googleMap: google.maps.Map
	constructor(divID: string) {
		this.googleMap = new google.maps.Map(document.getElementById(divID), {
			center: {
				lat: 0,
				lng: 0,
			},
			zoom: 1,
		})
	}

	addUserMarker(user: User): void {
		new google.maps.Marker({
			map: this.googleMap,
			position: {
				lat: user.location.lat,
				lng: user.location.lng,
			},
		})
	}

	addCompanyMarker(company: Company): void {
		new google.maps.Marker({
			map: this.googleMap,
			position: {
				lat: company.locations.lat,
				lng: company.locations.lng,
			},
		})
	}
}
