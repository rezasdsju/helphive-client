import { toast } from "@/components/ui/toast";
import { authClient } from "./auth-client";



const getTokenFromClient = async() => {
    const { data, error } = await authClient.token()
    if (error) {
      console.log(error)
      toast.add({
        type: "error",
        description: "An error occurred to get token.",
        priority: 'high'
      })
      return
    }

    const jwtToken = data?.token
    return jwtToken
};

export default getTokenFromClient;