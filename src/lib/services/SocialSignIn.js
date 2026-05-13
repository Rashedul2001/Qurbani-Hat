import { toast } from "react-toastify";
import { authClient } from "../auth-client";


export const socialSignIn = async (provider) => {
    const { data } = await authClient.signIn.social({
        provider: provider,
    });

};