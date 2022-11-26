const localhostServer = "http://localhost:6969";
const transferPath = "transfer";

export const serviceTransfer= async (idAccount, idAccountToAdd, transferFonds) => {
    try {
        const res = await fetch(`${localhostServer}/${transferPath}`, {
            headers: {"Content-Type": "application/json; charset=UTF-8"},
            method: "PUT",
            body: JSON.stringify({idAccount, idAccountToAdd, transferFonds}),
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