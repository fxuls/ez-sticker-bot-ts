import { Bot } from "grammy";
import config from "./config";

const bot = new Bot(config.token);

bot.command("start", (ctx) => ctx.reply("Pong..."));

console.log("Bot started");
bot.start();
