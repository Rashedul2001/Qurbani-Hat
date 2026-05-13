import { authClient } from "../auth-client";

export const socialSignIn = async (provider) => {
    const { data, error } = await authClient.signIn.social({
        provider: provider,
    }, {
        onRequest: (ctx) => {
            setIsLoading(true);
        },
        onSuccess: (ctx) => {
            toast.success(`Welcome to Qurbani Hat, ${data.name}!`);
            setIsLoading(false);
            router.push('/');
            router.refresh();
        },
        onError: (ctx) => {
            toast.error(error);
            setIsLoading(false);
        },
    });

};