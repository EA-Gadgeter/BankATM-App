const localhostServer = "http://localhost:6969";
const loginPath = "login";

export const serviceLogin = async (cardNumber, NIP) => {
    try {
        const res = await fetch(`${localhostServer}/${loginPath}`, {
            headers: {"Content-Type": "application/json; charset=UTF-8"},
            method: "POST",
            body: JSON.stringify({cardNumber, NIP}),
        });

        let resJson = await res.json();

        if(res.status === 200) {
            return resJson;
        } else {
            console.error('res', res);
        }
    } catch (error) {
        console.log('error', error);
    }
};


