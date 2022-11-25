const localhostServer = "http://localhost:6969";
const withdrawPath = "withdraw";

export const serviceWithdraw = async (idAccount, restFonds) => {
    try {
        const res = await fetch(`${localhostServer}/${withdrawPath}`, {
            headers: {"Content-Type": "application/json; charset=UTF-8"},
            method: "PUT",
            body: JSON.stringify({idAccount, restFonds}),
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