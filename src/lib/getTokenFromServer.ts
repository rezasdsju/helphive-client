import { headers } from "next/headers";
import { auth } from "./auth";


const getTokenFromServer = async() => {
    const session = await auth.api.getToken({
        headers: await headers()
    })
    const token = session?.token
    return token
};

export default getTokenFromServer;