const localhostServer = "http://localhost:6969";
const loginPath = "transaction";

// Service for validating user logic info
// Almost all services have the same structure
export const serviceTransaction = async (transactionInfo) => {
    try {
        const res = await fetch(`${localhostServer}/${loginPath}`, {
            // Need to specify content type, method, and parsing to string the data
            // from body
            headers: {"Content-Type": "application/json; charset=UTF-8"},
            method: "POST",
            body: JSON.stringify({...transactionInfo}),
        });

        let resJson = await res.json();

        // If everything is ok, we return the data from backend
        // in a JSON format
        if(res.status === 200) {
            return resJson;
        } else {
            console.error('res', res);
        }
    } catch (error) {
        console.log('error', error);
    }
};


