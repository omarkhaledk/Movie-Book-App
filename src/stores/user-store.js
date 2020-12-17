import { makeObservable, observable, computed, action } from "mobx";

class UserStore {
    user

    constructor() {
        makeObservable(this, {
            user: observable,
            setUser: action
        });
        this.user = {}
    }

    setUser(user) {
        this.user = user;
    }
}

const userStore = new UserStore();

export default userStore;