import { makeObservable, observable, action } from "mobx";

class ApiStore {
    errorState = false

    constructor() {
        makeObservable(this, {
            errorState: observable,
            setErrorState: action
        });
    }

    setErrorState(value) {
        this.errorState = value;
    }
}

const apiStore = new ApiStore();

export default apiStore;