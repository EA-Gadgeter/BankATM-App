const localhostServer = "http://localhost:6969";
const depFondsPath = "dep-fonds";

export const serviceDepPay= async (idAccount, depPayFonds, cardType) => {
    try {
        const res = await fetch(`${localhostServer}/${depFondsPath}`, {
            headers: {"Content-Type": "application/json; charset=UTF-8"},
            method: "PUT",
            body: JSON.stringify({idAccount, depPayFonds, cardType}),
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