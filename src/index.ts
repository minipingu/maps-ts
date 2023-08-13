import { User } from './User'
import { Company } from './Company'
import { CustomMap } from './CustomMap'

//lesson232
const map = new CustomMap('map')
const user = new User()
const company = new Company()

map.addUserMarker(user)
map.addCompanyMarker(company)
