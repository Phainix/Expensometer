
const isMatchingRoute = (state, route) => ({
    ...state, // keep all state the same, except for the following:
    route: {
        ...state.route,
        currentRoute: route
    }
})

export {
    isMatchingRoute
};