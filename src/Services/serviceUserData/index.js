const localhostServer = "http://localhost:6969";
const menuPath = "menu";

export const serviceUserData = async (idAccount, cardNumber) => {
    try {
        const res = await fetch(`${localhostServer}/${menuPath}`, {
            headers: {"Content-Type": "application/json; charset=UTF-8"},
            method: "POST",
            body: JSON.stringify({idAccount, cardNumber}),
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