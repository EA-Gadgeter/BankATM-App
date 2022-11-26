const localhostServer = "http://localhost:6969";
const transferPath = "transfer";

export const serviceCardExists = async (cardNumber) => {
    try {
        const res = await fetch(`${localhostServer}/${transferPath}`, {
            headers: {"Content-Type": "application/json; charset=UTF-8"},
            method: "POST",
            body: JSON.stringify({cardNumber}),
        });

        let resJson = await res.json();

        if (res.status === 200) {
            return resJson;
        } else {
            console.error('res', res);
        }
    } catch (error) {
        console.log('error', error);
    }
};