export const namespaced = true

export const state = {
    username: ""
};

export const mutations = {
    SET_USERNAME: function (state, event) {
        state.username = event.username;
    },
};

export const actions = {
    fetch_username({ commit, dispatch }, event) {
        fetch("/api/username")
            .then(rep => rep.json())
            .then((data) => {
                commit("SET_USERNAME", { username: data.username });
            })
            .catch((error) =>
                console.log("An error occured with fetch:", error)
            );
    }
};

export const getters = {};