async function init() {
    try {
        const connection = new BareMux.BareMuxConnection("/baremux/worker.js")
        let wispUrl = (location.protocol === "https:" ? "wss" : "ws") + "://" + location.host + "/wisp/";

        if (await connection.getTransport() !== "/epoxy/index.mjs") {
            await connection.setTransport("/epoxy/index.mjs", [{ wisp: wispUrl }]);
            console.log("Using websocket transport");
        }
    } catch (error) {
        console.error("Error setting up BareMux transport:", error);
    }
}
init();