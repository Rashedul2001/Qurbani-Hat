import { toast } from "react-toastify";
import { authClient } from "../auth-client";


export const socialSignIn = async (provider) => {
    const { error } = await authClient.signIn.social({
        provider: provider,
        callbackURL: '/',
    });

    if (error) {
        toast.error('Failed to sign in. Please try again.');
    }
};