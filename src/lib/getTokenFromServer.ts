import { headers } from "next/headers";
import { auth } from "./auth";


const getTokenFromServer = async () => {
    try {
        const session = await auth.api.getToken({
            headers: await headers()
        })
        const token = session?.token
        return token
    } catch {
        return null
    }
};

export default getTokenFromServer;