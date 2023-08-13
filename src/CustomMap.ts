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
		const marker = new google.maps.Marker({
			map: this.googleMap,
			position: {
				lat: user.location.lat,
				lng: user.location.lng,
			},
		})
		marker.addListener('click', () => {
			const infoWindow = new google.maps.InfoWindow({
				content: 'User',
			})
			infoWindow.open(this.googleMap, marker)
		})
	}

	addCompanyMarker(company: Company): void {
		const marker = new google.maps.Marker({
			map: this.googleMap,
			position: {
				lat: company.locations.lat,
				lng: company.locations.lng,
			},
		})

		marker.addListener('click', () => {
			const infoWindow = new google.maps.InfoWindow({
				content: 'Company',
			})
			infoWindow.open(this.googleMap, marker)
		})
	}
}
