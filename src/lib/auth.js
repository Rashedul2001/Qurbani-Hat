import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.MONGO_CLIENT);
const db = client.db(process.env.MONGO_DB);

export const auth = betterAuth({
    database: mongodbAdapter(db, {
        // Optional: if you don't provide a client, database transactions won't be enabled.
        client
    }),
    emailAndPassword: {
        enabled: true,
        autoSignIn: false,
    },
    //nextCookies for when I will use the server component to register login
    // install the nextCookies first
    // plugins: [nextCookies()] // make sure this is the last plugin in the array
});