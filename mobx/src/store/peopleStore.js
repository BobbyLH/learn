import * as mobx from 'mobx'
import {observable, computed, action, autorun} from 'mobx'

class PeopleStore {
    @observable name = ['Michel', 'bobby']
    @action changeName () {
        this.name[0] = 'Michel Weststrate'
    }
}
export default new PeopleStore()