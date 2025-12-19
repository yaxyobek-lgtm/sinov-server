const { Telegraf } = require('telegraf');

const BOT_TOKEN = '8069097295:AAEjGxeifBH3zkrcAYMmOL1P_Zo7esdKgsI';
const bot = new Telegraf(BOT_TOKEN);

// /start
bot.start((ctx) => {
  const name = ctx.from.username
    ? `@${ctx.from.username}`
    : ctx.from.first_name;

  ctx.reply(`Salom, ${name}! 👋`);
});

// Echo
bot.on('text', (ctx) => {
  ctx.reply(ctx.message.text);
});

// Ishga tushirish
bot.launch()
  .then(() => console.log('🤖 Bot ishga tushdi'))
  .catch(err => console.log('❌ Xato:', err));

// Render uchun (server uxlab qolmasligi uchun)
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Bot ishlayapti 🚀');
});

app.listen(PORT, () => {
  console.log(`🌐 Server ${PORT} portda`);
});
