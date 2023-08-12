import { faker } from '@faker-js/faker'

class Company {
	companyName: string
	catchPhrase: string
	locations: {
		lat: number
		lng: number
	}
	constructor() {
		this.companyName = faker.company.name()
		this.catchPhrase = faker.company.catchPhrase()
		this.locations = {
			lat: faker.location.latitude(),
			lng: faker.location.longitude(),
		}
	}
}

export { Company }
