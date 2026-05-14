import { toast } from "react-toastify";
import { authClient } from "../auth-client";


export const socialSignIn = async (provider) => {
    const { data, error } = await authClient.signIn.social({
        provider: provider,
    });
    if (data) {
        toast.success('Signed in successfully!');
    }
    if (error) {
        toast.error('Failed to sign in. Please try again.');
    }
};