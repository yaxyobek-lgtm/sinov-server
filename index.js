require('dotenv').config();
const { Telegraf } = require('telegraf');
const express = require('express');

const bot = new Telegraf(process.env.BOT_TOKEN);

// Express server (ping uchun)
const app = express();
app.get('/', (req, res) => res.send('Bot ishlayapti!'));
app.listen(process.env.PORT || 3000, () => {
  console.log(`🌐 Server port ${process.env.PORT} da ishlayapti`);
});

// /start komandasi
bot.start((ctx) => {
  const name = ctx.from.username ? `@${ctx.from.username}` : ctx.from.first_name;
  ctx.reply(`👋 Salom, ${name}!`);
});

// Foydalanuvchi yuborgan xabarni echo qilish
bot.on('text', (ctx) => {
  ctx.reply(ctx.message.text);
});

bot.launch();
console.log('🤖 Salom + Echo bot ishlayapti...');
