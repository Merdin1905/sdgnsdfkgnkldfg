const Discord = require("discord.js");
const moment = require("moment");

var green = process.env.NODE_DISABLE_COLORS ? '' : '\x1b[32m';

require("moment-duration-format");

exports.run = (client, msg) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  msg.channel.sendCode("asciidoc", `Yetkili komutlar | Not:Komutlar ! ile baslar	
  • istatistik      :: Bot Istatistiligini Gosterir.
  • anket :: Anket Acar		
  • ban   :: İstediğiniz kişiyi sunucudan yasaklar.
  • kick    :: İstediğiniz kişiyi sunucudan atar.
  • sustur  :: İstediğiniz kişiyi susturur.
  • temizle :: Mesajları siler.
  • uyar    :: İstediğiniz kişiye uyarı verir.
  • duyuruyap   :: Sunucunuzda duyuru yapmanızı sağlar.
  • kilit :: Unuttum :(
  • unload :: Yetkili Bilir
  • unban  :: Ban Kaldirir.
  • terfi  :: Kullaniciyi Terfi Eder
    Sayfa 4 / 4 |`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yardım4'],
  permLevel: 0
};

exports.help = {
  name: 'yardım4',
  description: 'Tüm komutları listeler. İsterseniz bir komut hakkında yardım eder..',
  usage: 'yardım4'
};