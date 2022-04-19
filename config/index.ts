import "dotenv/config";
import settings from "./settings.json"

const env = process.env;

const config = {
    token: env.TOKEN as string,
    environment: env.ENVIRONMENT as string,
    adminId: env.ADMIN_ID as string,
    ...settings,
}

export default config;
