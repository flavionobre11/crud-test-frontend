import { routes as auth } from '../../components/modules/auth/'
import { routes as home } from '../../components/pages/home'
import { routes as contacts } from '../../components/pages/contacts'
import { routes as ranking } from '../../components/pages/ranking'

export default [
    ...auth,
    ...home,
    ...contacts,
    ...ranking
]