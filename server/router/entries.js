const landingRouter = require("./landing");

const SERVICES = {
    landing: { routePrefix: "/api", router: landingRouter },
}

module.exports = {
    register: (app, services) => {
        let serviceEntry;
        (!!services ? services : Object.keys(SERVICES)).forEach(service => {
            serviceEntry = SERVICES[service];
            !!serviceEntry && app.use(serviceEntry.routePrefix, serviceEntry.router);
        });
    }
}