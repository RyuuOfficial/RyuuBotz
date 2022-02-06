/*
Base Ori : Ryuu Chan ><

≻ Thanks To
Ramlan ID ( bot pertama yang gw mainin ) 
Hexagonz
Ahmad Gustian A.N ( AGAN YT ) 
Fredrik Fornwall ( pembuat termux ) 
Zero YT
Ryuu ( gw sendiri 🗿 ) 
Penyedia Module

kalo kelen jual silahkan tapi chat gw dulu 🤧
*/

const {
WAConnection,
MessageType,
Presence,
MessageOptions,
Mimetype,
WALocationMessage,
WA_MESSAGE_STUB_TYPES,
WA_DEFAULT_EPHEMERAL,
ReconnectMode,
ProxyAgent,
GroupSettingChange,
waChatKey,
mentionedJid,
processTime,
} = require('@adiwajshing/baileys')
const fs = require('fs')
const hx = require('hxz-api')
const axios = require("axios")
const yts = require('yt-search')
const crypto = require('crypto')  
const request = require('request')
const ffmpeg = require('fluent-ffmpeg')
const speed = require('performance-now')
const moment = require('moment-timezone')
const { color, bgcolor } = require('./lib/color')
const { mediafireDl } = require('./lib/mediafire.js')
const { fetchJson, fetchText } = require('./lib/fetcher')
const { exec, spawn, execSync } = require('child_process')
const { yta, ytv, buffer2Stream, ytsr, baseURI, stream2Buffer, noop } = require('./lib/ytdl')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { ind } = require('./recode')

//DATABASE
const setting = JSON.parse(fs.readFileSync('./setting.json'))
const ban = JSON.parse(fs.readFileSync('./database/banned.json'))
const prem = JSON.parse(fs.readFileSync('./database/premium.json'))
const pendaftar = JSON.parse(fs.readFileSync('./database/pendaftar.json'))
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))

//GAMBAR
img1 = fs.readFileSync('./gambar/thumb.jpg')
img2 = fs.readFileSync('./gambar/fake.jpg')

//MODE
publik = true

//Kalo Mau Ganti di setting.json
zeksApi = setting.ZEKSKEY
fakeyoi = ["𝐑𝐲𝐮𝐮 𝐗 𝐓𝐞𝐫𝐦𝐮𝐱𝐁𝐨𝐭𝐳"] //ganti terserah lu
const simbol = '›' //simbol sebelum prefix 
const botName = setting.BotName
const owner = setting.OwnerNumber
const ownerName = setting.OwnerName

//=================( WAKTU )=================//

function kyun(seconds){
function pad(s){
return (s < 10 ? '0' : '') + s;
}
var hours = Math.floor(seconds / (60*60));
var minutes = Math.floor(seconds % (60*60) / 60);
var seconds = Math.floor(seconds % 60);
return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`

}
const time2 = moment().tz('Asia/Makassar').format('HH:mm:ss')  
 if(time2 < "23:59:00"){
var ucapanWaktu = 'Good night'
 }
 if(time2 < "19:00:00"){
var ucapanWaktu = 'Good afternoon'
 }
 if(time2 < "18:00:00"){
var ucapanWaktu = 'Good afternoon'
 }
 if(time2 < "15:00:00"){
var ucapanWaktu = 'Good afternoon'
 }
 if(time2 < "11:00:00"){
var ucapanWaktu = 'Good morning'
 }
 if(time2 < "05:00:00"){
var ucapanWaktu = 'Good Night'
 } 
  
//=================( FUNCTION )=================//

module.exports = Ryuu = async (Ryuu, mek) => {
try {
if (!mek.hasNewMessage) return
mek = mek.messages.all()[0]
if (!mek.message) return
if (mek.key && mek.key.remoteJid == 'status@broadcast') return
if (mek.key.fromMe) return
global.prefix
global.blocked
mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
const content = JSON.stringify(mek.message)
const from = mek.key.remoteJid
const type = Object.keys(mek.message)[0]
const { text, extendedText, contact, groupInviteMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
const wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")
const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '#'
body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : ''
budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const isCmd = body.startsWith(prefix)
const ownerNumber = [`${owner}@s.whatsapp.net`]
const q = args.join(' ')
const c = args.join(' ')
const botNumber = Ryuu.user.jid
const botNumberss = Ryuu.user.jid + '@c.us'
const isGroup = from.endsWith('@g.us')
let sender = isGroup ? mek.participant : mek.key.remoteJid
const isOwner = ownerNumber.includes(sender)
const totalchat = await Ryuu.chats.all()
const groupMetadata = isGroup ? await Ryuu.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupId = isGroup ? groupMetadata.jid : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupDesc = isGroup ? groupMetadata.desc : ''
const groupOwner = isGroup ? groupMetadata.owner : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
const isGroupAdmins = groupAdmins.includes(sender) || false        
const isAntilink = isGroup ? antilink.includes(from) : false
const conts = mek.key.fromMe ? Ryuu.user.jid : Ryuu.contacts[sender] || { notify: jid.replace(/@.+/, '') }
const pushname = mek.key.fromMe ? Ryuu.user.name : conts.notify || conts.vname || conts.name || '-'
const isUser = pendaftar.includes(sender)
const isBanned = ban.includes(sender)
const isPremier = prem.includes(sender)
const totalChat = await Ryuu.chats.all()
const groups = Ryuu.chats.array.filter(v => v.jid.endsWith('g.us'))
const privat = Ryuu.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
const cekcek = randomNomor(100)  

//=================( MESS ONLY )=================//

mess = {
premier: `Fitur ini khusus Premium\nMau jadi premium? chat owner...`,
wait: 'Wait a minute',
wrongFormat: 'Format salah, coba liat lagi di menu',
success: 'Success',
error: {
stick: 'Cannot access videos!',
lv: 'Invalid link!',
api: 'Error'
},
only: {
group: 'Khusus Group...',
owner: 'Khusus owner...',
}
}
const isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
}
function randomNomor(angka){
return Math.floor(Math.random() * angka) + 1
}
//=================( REPLY MESSAGE )=================//

const fakeText = (teks) => {
Ryuu.sendMessage(from, teks, text, {quoted: mek})
}
const reply = (teks) => {
Ryuu.sendMessage(from, teks, text, {quoted: mek})
}
const fakethumb = (teks, yes) => {
Ryuu.sendMessage(from, teks, image, {thumbnail:fs.readFileSync('./gambar/fake.jpg'),quoted:mek,caption:yes})
}      
const sendMess = (hehe, teks) => {
Ryuu.sendMessage(hehe, teks, text)
}

const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? Ryuu.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : Ryuu.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
}            
if (budy.includes("https://chat.whatsapp.com/")) {
if (!isGroup) return
if (!isAntilink) return
if (isGroupAdmins) return reply("admin bebas aowkwkww")
var kic = `${sender.split("@")[0]}@s.whatsapp.net`
reply(` *「 GROUP LINK DETECTOR 」*\nKamu mengirimkan link grup chat, maaf kamu di kick dari grup :(`)
setTimeout(() => {
Ryuu.groupRemove(from, [kic]).catch((e) => { reply(`BOT HARUS JADI ADMIN`) })
}, 0)
}          
//=================( FAKE )=================//

//FAKE VN
const fvn = {
key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds": "9999999","ptt": "true"}}}
//FAKE TEXT
const ftext = {
key: {fromMe: true ,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${fakeyoi}`,"title": `Hmm`,'jpegThumbnail': fs.readFileSync('./gambar/fake.jpg')}}}
//FAKE VIDEO
const mek = {
key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":"hallo bang","h": `Hmm`,'seconds': '-99999', 'caption': `${fakeyoi}`,'jpegThumbnail': fs.readFileSync('./gambar/fake.jpg')}}}
//FAKE GRUP
const fgc = {
key: {"fromMe": false,"participant": "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "62895619083555-1616169743@g.us","inviteCode": "mememteeeekkeke","groupName": "P", "caption": `${fakeyoi}`, 'jpegThumbnail': fs.readFileSync('./gambar/fake.jpg')}}}

//=================( SEND KONTAK )=================//

const sendKontak = (from, nomor, nama, org = "") => {
const vcard =
"BEGIN:VCARD\n" +
"VERSION:3.0\n" +
"FN:" +
nama +
"\n" +
"ORG:" +
org +
"\n" +
"TEL;type=CELL;type=VOICE;waid=" +
nomor +
":+" +
nomor +
"\n" +
"END:VCARD";
Ryuu.sendMessage(
from,
{ displayname: nama, vcard: vcard },
MessageType.contact,
{ quoted: mek }
);
};            
    
//=================( BUTTON )=================//
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
Ryuu.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}

const sendButton = async (from, context, fortext, but, mek) => {
buttonMessages = {
contentText: context,
footerText: fortext,
buttons: but,
headerType: 1
}
Ryuu.sendMessage(from, buttonMessages, buttonsMessage, {
quoted: mek
})
}
const sendButImage = async (from, context, fortext, img, but, mek) => {
jadinya = await Ryuu.prepareMessage(from, img, image)
buttonMessagesI = {
imageMessage: jadinya.message.imageMessage,
contentText: context,
footerText: fortext,
buttons: but,
headerType: 4
}
Ryuu.sendMessage(from, buttonMessagesI, buttonsMessage, {
quoted: mek,
})
}
async function sendButLoc(id, text1, desc1, gam1, but = [], options = {}) {
let buttonMessages = { locationMessage: { jpegThumbnail: gam1 }, contentText: text1, footerText: desc1, buttons: but, headerType: 6 }
return Ryuu.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}            

//=================( STICKER )=================//

const sticOwner = (hehe) => {
ano = fs.readFileSync('./lib/sticker/owner.webp')
Ryuu.sendMessage(hehe, ano, sticker, { quoted: mek})
}
const sticWait = (hehe) => {
ano = fs.readFileSync('./lib/sticker/wait.webp')
Ryuu.sendMessage(hehe, ano, sticker, { quoted: mek})
}
const sticLoad = (hehe) => {
ano = fs.readFileSync('./lib/sticker/loading.webp')
Ryuu.sendMessage(hehe, ano, sticker, { quoted: mek})
}
const sticGroup = (hehe) => {
ano = fs.readFileSync('./lib/sticker/group.webp')
Ryuu.sendMessage(hehe, ano, sticker, { quoted: mek})
}
const sticBotAdmin = (hehe) => {
ano = fs.readFileSync('./lib/sticker/botadmin.webp')
Ryuu.sendMessage(hehe, ano, sticker, { quoted: mek})
}
const sticBanned = (hehe) => {
ano = fs.readFileSync('./lib/sticker/banned.webp')
Ryuu.sendMessage(hehe, ano, sticker, { quoted: mek})
}
const sticAdmin = (hehe) => {
ano = fs.readFileSync('./lib/sticker/admin.webp')
Ryuu.sendMessage(hehe, ano, sticker, { quoted: mek})
}

//=================( MEDIA URL )=================//

const sendStickerFromUrl = async(to, url) => {
var names = Date.now() / 10000;
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, './stik' + names + '.png', async function () {
console.log('selesai');
let filess = './stik' + names + '.png'
let asw = './stik' + names + '.webp'
exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
let media = fs.readFileSync(asw)
Ryuu.sendMessage(to, media, MessageType.sticker,{quoted:mek})
fs.unlinkSync(filess)
fs.unlinkSync(asw)
});
});
}
const sendFileFromUrl = async(link, type, options) => {
hasil = await getBuffer(link)
Ryuu.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
Ryuu.sendMessage(from, hasil, type, options).catch(e => {
Ryuu.sendMessage(from, { url : link }, type, options).catch(e => {
reply('_[ ! ] Error Gagal Dalam Mengirim Media_')
console.log(e)
})
})
})
})
}            
const sendMediaURL = async(to, url, text="", mids=[]) =>{
if(mids.length > 0){
text = normalizeMention(to, text, mids)
}
const fn = Date.now() / 10000;
const filename = fn.toString()
let mime = ""
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
mime = res.headers['content-type']
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, filename, async function () {
console.log('done');
let media = fs.readFileSync(filename)
let type = mime.split("/")[0]+"Message"
if(mime === "image/gif"){
type = MessageType.video
mime = Mimetype.gif
}
if(mime.split("/")[0] === "audio"){
mime = Mimetype.mp4Audio
}
Ryuu.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
fs.unlinkSync(filename)
});
}

//=================( PENDAFTAR )=================//
   
if (isCmd && !isUser){
pendaftar.push(sender)
fs.writeFileSync('./database/pendaftar.json', JSON.stringify(pendaftar, null, 2))
}
        
//=================( EXTENDED MESSAGE )=================//

colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
const isMedia = (type === 'imageMessage' || type === 'videoMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))

if (!publik) {
if (!isOwner && !mek.key.fromMe) return
}

Ryuu.chatRead(from, "read")

//=================( CASE & MENU )=================//

switch (command) {
case 'help
case 'menu': 
mnu = `
Hi @${sender.split("@")[0]} 👋
${ucapanWaktu} 

*</Ini adalah fitur bot kami>*


≻ *Info*
${simbol} ${prefix}sc
${simbol} ${prefix}owner
${simbol} ${prefix}donasi
${simbol} ${prefix}mekontak
${simbol} ${prefix}request <fitur>

≻ *Owner*
${simbol} ${prefix}self
${simbol} ${prefix}public
${simbol} ${prefix}restart
${simbol} ${prefix}bc <text>
${simbol} ${prefix}setfake <reply image>
${simbol} ${prefix}setreply <nama>
${simbol} ${prefix}setthumb <reply image>
${simbol} ${prefix}ban 628xxx
${simbol} ${prefix}unban 628xxx
${simbol} ${prefix}addprem 628xxx
${simbol} ${prefix}delprem 628xxx
${simbol} > <eval>
${simbol} x <eval2>

≻ *Group*
${simbol} ${prefix}antilink
${simbol} ${prefix}leave
${simbol} ${prefix}closegc
${simbol} ${prefix}opengc
${simbol} ${prefix}linkgrup
${simbol} ${prefix}listadmin
${simbol} ${prefix}setpp
${simbol} ${prefix}kick @tag
${simbol} ${prefix}add +628
${simbol} ${prefix}tagall
${simbol} ${prefix}hidetag
${simbol} ${prefix}demote
${simbol} ${prefix}promote
${simbol} ${prefix}delete

≻ *Convert*
${simbol} ${prefix}ttp
${simbol} ${prefix}attp
${simbol} ${prefix}dare
${simbol} ${prefix}truth
${simbol} ${prefix}sticker <reply>
${simbol} ${prefix}toimg <reply>
${simbol} ${prefix}cerpen
${simbol} ${prefix}tongue
${simbol} ${prefix}pantun

≻ *Download*
${simbol} ${prefix}tiktok <link>
${simbol} ${prefix}ytmp3 <link>
${simbol} ${prefix}ytmp4 <link>
${simbol} ${prefix}ytplay <judul>
${simbol} ${prefix}playmp4 <judul>
${simbol} ${prefix}playmp3 <judul>
${simbol} ${prefix}mediafire <link>

≻ *Search*
${simbol} ${prefix}waifu
${simbol} ${prefix}husbu
${simbol} ${prefix}ytsearch
${simbol} ${prefix}pinterest
${simbol} ${prefix}playstore
${simbol} ${prefix}nekonime
${simbol} ${prefix}namaninja
${simbol} ${prefix}imgsearch
${simbol} ${prefix}searchgrup

≻ *CanvasLogo*
${simbol} ${prefix}rem
${simbol} ${prefix}kaneki
${simbol} ${prefix}sadboy
${simbol} ${prefix}lolimaker
${simbol} ${prefix}girlneko

≻ *Random*
${simbol} ${prefix}fox
${simbol} ${prefix}cat
${simbol} ${prefix}dog
${simbol} ${prefix}birb
${simbol} ${prefix}koala
${simbol} ${prefix}panda
${simbol} ${prefix}meme
${simbol} ${prefix}nickepep
${simbol} ${prefix}katailham
${simbol} ${prefix}red_panda
${simbol} ${prefix}estetikpic
${simbol} ${prefix}darkjokes
${simbol} ${prefix}memeindo
${simbol} ${prefix}katasindiran

≻ *NSFW*
${simbol} ${prefix}trap
${simbol} ${prefix}neko
${simbol} ${prefix}awoo
${simbol} ${prefix}waifu
${simbol} ${prefix}blowjob
${simbol} ${prefix}megumin
${simbol} ${prefix}shinobu

≻ *Maker*
${simbol} ${prefix}tfire
${simbol} ${prefix}nulis
${simbol} ${prefix}tlight
${simbol} ${prefix}serti1
${simbol} ${prefix}serti2
${simbol} ${prefix}serti3
${simbol} ${prefix}gneon
${simbol} ${prefix}bneon
${simbol} ${prefix}matrix
${simbol} ${prefix}text3d
${simbol} ${prefix}sandw
${simbol} ${prefix}leavest
${simbol} ${prefix}gaming
${simbol} ${prefix}crismes
${simbol} ${prefix}lithgtext
${simbol} ${prefix}blackpink
${simbol} ${prefix}text3dbox
${simbol} ${prefix}breakwall
${simbol} ${prefix}dropwater
${simbol} ${prefix}neon_light
${simbol} ${prefix}watercolor`
mnu2 =`~𝘚𝘦𝘳𝘷𝘦𝘳: 𝘉𝘢𝘪𝘭𝘦𝘺𝘴\n~𝘝𝘦𝘳𝘴𝘪𝘰𝘯: 1.0.0\n~𝘓𝘢𝘯𝘨𝘶𝘢𝘨𝘦: 𝘑𝘢𝘷𝘢𝘚𝘤𝘳𝘪𝘱𝘵\n~𝘈𝘶𝘵𝘩𝘰𝘳: 𝘙𝘺𝘶𝘶`
but = [
{ buttonId: `${prefix}owner`, buttonText: { displayText: '️ᴏᴡɴᴇʀ' }, type: 1 },
{ buttonId: `${prefix}donasi`, buttonText: { displayText: '️ᴅᴏɴᴀsɪ' }, type: 1 }
{ buttonId: `${prefix}restart`, buttonText: { displayText: '️ʀᴇsᴛᴀʀᴛ' }, type: 1 },
]
sendButLoc(from, mnu, mnu2, img1, but)
break
case 'sc':
reply(`https://github.com/RyuuOfficial
Taunya gratisan mulu_-`) 
break
case 'donasi':
dns =`${(ind.donasi())}`
reply(dns)
break
case 'hidetag':              
if (!isGroup) return sticGroup(from)
if (!isGroupAdmins) return sticAdmin(from)
var value = body.slice(9)
var group = await Ryuu.groupMetadata(from)
var member = group['participants']
var mem = []
member.map( async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
text: value,
contextInfo: { mentionedJid: mem },
quoted: mek
}
Ryuu.sendMessage(from, options, text)
break
case 'demote':
if (!isGroup) return sticGroup(from)
if (!isGroupAdmins) return sticAdmin(from)
if (!isBotGroupAdmins) return sticBotAdmin(from)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 𝘆𝗮??𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = ''
for (let _ of mentioned) {
teks += `*jabatan kamu di copot*🏃 :\n`
teks += `@_.split('@')[0]`
	}
mentions(teks, mentioned, true)
Ryuu.groupDemoteAdmin(from, mentioned)
} else {
mentions(`Yahh @${mentioned[0].split('@')[0]} Jabatan kamu sebagai leluhur di grup telah di copot🏃`, mentioned, true)
Ryuu.groupDemoteAdmin(from, mentioned)
}
break
case 'promote':
if (!isGroup) return sticGroup(from)
if (!isGroupAdmins) return sticAdmin(from)
if (!isBotGroupAdmins) return sticBotAdmin(from)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 ??𝗮??𝗴??𝘁 𝘆𝗮??𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = ''
for (let _ of mentioned) {
teks += `*</Promote>*`
teks += `@_.split('@')[0]\n\n`
teks += `Telah menjadi Admin Group`
}
mentions(teks, mentioned, true)
Ryuu.groupMakeAdmin(from, mentioned)
} else {
mentions(`*</Promote>*\n @${mentioned[0].split('@')[0]}\n\nTelah menjadi Admin Group`, mentioned, true)
Ryuu.groupMakeAdmin(from, mentioned)
}
break
case 'delete':
case 'del':
case 'd':
if (!isGroup) return sticGroup(from)
if (!isGroupAdmins) return sticAdmin(from)
Ryuu.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
break
case 'tagall':
if (!isGroup) return sticGroup(from)
if (!isGroupAdmins) return sticAdmin(from)
members_id = []
teks = (args.length > 1) ? body.slice(8).trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `*≻* @${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions(teks, members_id, true)
break
case 'add':
if (!isGroup) return sticGroup(from)
if (!isGroupAdmins) return sticAdmin(from)
if (!isBotGroupAdmins) return sticBotAdmin(from)
if (args.length < 1) return reply('Yang mau di add jin ya?')
if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
try {
num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
Ryuu.groupAdd(from, [num])
} catch (e) {
console.log('Error :', e)
reply('Target telah memprivate penambahan group!')
}
break
case 'kick':
if (!isGroup) return sticGroup(from)
if (!isGroupAdmins) return sticAdmin(from)
if (!isBotGroupAdmins) return sticBotAdmin(from)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, mengeluarkan :\n'
for (let _ of mentioned) {
teks += `@${mentioned[0].split('@')[0]}\n`
}
mentions(teks, mentioned, true)
Ryuu.groupRemove(from, mentioned)
} else {
mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
Ryuu.groupRemove(from, mentioned)
}
break

case 'leave':
if (!isGroup) return sticGroup(from)
if (isGroupAdmins || isOwner) {
Ryuu.groupLeave(from)
} else {
sticAdmin(from)
}
break
case 'dare':
case 'truth':
td = fs.readFileSync('./gambar/tedy.jpg')
bt = await fetchJson(`https://melcanz.com/${command}?&apikey=trial`)
bt1 =`*${bt.result}*`
bt2 =`Klik Next Untuk Melanjutkan`
but = [
{ buttonId: `${prefix + command}`, buttonText: { displayText: '️next' }, type: 1 }
]
sendButLoc(from, bt1, bt2, img1, but)
break
case 'ttp':
case 'attp':
if (args.length ==0)return (`Text nya mana cuy Contoh\n${prefix + command} Ryuu`)
tp = args.join(" ")
sticWait(from)
rd = await getBuffer(`https://melcanz.com/${command}?text=${tp}&apikey=trial`)
Ryuu.sendMessage(from,rd,sticker, {quoted: mek})
break
case 'setpp': 
if (!isGroup) return sticGroup(from)
if (!isGroupAdmins) return sticAdmin(from)
if (!isBotGroupAdmins) return sticBotAdmin(from)
media = await Ryuu.downloadAndSaveMediaMessage(mek)
await Ryuu.updateProfilePicture(from, media)
reply('*Sukses mengganti icon group*')
break
case 'linkgc':
case 'linkgrup':
case 'linkgroup':
if (!isGroup) return sticGroup(from)
if (!isGroupAdmins) sticAdmin(from)
if (!isBotGroupAdmins) sticBotAdmin(from)
linkgc = await Ryuu.groupInviteCode(from)
reply('https://chat.whatsapp.com/'+linkgc)
break
case 'listadmin':
if (!isGroup) return sticGroup(from)
teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
no = 0
for (let admon of groupAdmins) {
no += 1
teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
}
mentions(teks, groupAdmins, true)
break
case 'antilink':
if (!isGroup) return sticGroup(from)
if (!isGroupAdmins) return sticAdmin(from)
if (!isBotGroupAdmins) return sticBotAdmin(from)
if (Number(args[0]) === 1) {
if (isAntilink) return reply('Antilink group aktif')
antilink.push(from)
fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
reply('Fitur antilink telah di aktifkan! ️')
Ryuu.sendMessage(from,`Perhatian kepada seluruh member anti link group aktif apabila anda mengirim link group anda akan di kick dari group`, text)
} else if (Number(args[0]) === 0) {
if (!isAntilink) return reply('Fitur antilink di non-aktifkan!')
antilinkgrup.splice(from, 1)
fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
reply('Fitur antilink di non-aktifkan!')
} else {
sendButton(from, `MODE ANTILINK`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}antilink 1`,buttonText: {displayText: `ON`,},type: 1,},
{buttonId: `${prefix}antilink 0`,buttonText: {displayText: `OFF`,},type: 1,},
]
);
}
break;
case 'serti1':
case 'serti2':
case 'serti3':

if (isBanned)return sticBanned(from)
if (args.length ==0) return reply('Text Nya Mana Tod?')
txtt = args.join (" ")
sticWait(from)
buff = await getBuffer(`https://sertiojanganzapi.nasihosting.com/serti/${command}/img.php?nama=${txtt}`)
Ryuu.sendMessage(from, buff, image, { quoted: mek, caption: 'Nih Bro Hasil nya' })
break
case 'rem':
case 'kaneki':

if (isBanned)return sticBanned(from)
if (args.length ==0)return reply(`Textnya mana kak? Contoh\n${prefix + command} Ryuu`)
bo = args.join(" ")
sticWait(from)
bf = await getBuffer(`https://melcanz.com/${command}?nama=${bo}&apikey=trial`)
Ryuu.sendMessage(from, bf, image, { quoted: mek, caption: 'Logo By Ryuu Official' })
break
case 'sadboy':
case 'lolimaker':
case 'girlneko':

if (isBanned)return sticBanned(from)
if (args.length ==0)return reply(`Textnya mana kak? Contoh\n${prefix + command} Ryuu OFC`)
txt1 = args[0]
txt2 = args[1]
sticWait(from)
bf = await getBuffer(`https://melcanz.com/${command}?nama=${txt1}&nama2=${txt2}&apikey=trial`)
Ryuu.sendMessage(from, bf, image, { quoted: mek, caption: 'Logo By RyuuBotz' })
break
case 'toimg':
if (!isQuotedSticker) return reply('𝗥𝗲𝗽𝗹𝘆/𝘁𝗮𝗴 𝘀𝘁𝗶𝗰𝗸𝗲𝗿 !')
sticWait(from)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await Ryuu.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply('Yah gagal, coba ulangi ^_^')
buffer = fs.readFileSync(ran)
fakethumb(buffer,'By Ryuu Botz')
fs.unlinkSync(ran)
})
break
case 'searchgrup':

if (args.length < 1) return reply(`Nama Group? Contohnya\n${prefix + command} jb`)
hx.linkwa(q)
sticWait(from)
.then(result => {
let res = '*</Link Group WhatsApp>*\n\n'
for (let i of result) {
res += `*Nama*: *${i.nama}\n*Link*: ${i.link}\n\n`
}
reply(res)
});
break
case 'imgsearch':

if (args.length < 1) return reply('Tolong masukan query!')
let im = await hx.chara(q)
sticWait(from)
let acak = im[Math.floor(Math.random() * im.length)]
let li = await getBuffer(acak)
await Ryuu.sendMessage(from,li,image,{quoted: mek})           
break
case 'ytsearch':

if (args.length < 1) return reply('Tolong masukan query!')
var srch = args.join('');
sticWait(from)
try {
var aramas = await yts(srch);
} catch {
return await Ryuu.sendMessage(from, 'Error!', MessageType.text, dload)
}
aramat = aramas.all 
var tbuff = await getBuffer(aramat[0].image)
var ytresult = '';
ytresult += '「 *YOUTUBE SEARCH* 」'
ytresult += '\n________________________\n\n'
aramas.all.map((video) => {
ytresult += '❏ Title: ' + video.title + '\n'
ytresult += '❏ Link: ' + video.url + '\n'
ytresult += '❏ Durasi: ' + video.timestamp + '\n'
ytresult += '❏ Upload: ' + video.ago + '\n________________________\n\n'
});
ytresult += '◩ *SELF-BOT*'
await fakethumb(tbuff,ytresult)
break
case 'nickepep':
anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/nick-epep?apikey=IkyOgiwara`)
reply(`*Random Nick EpEp*\n${anu.result}`)
break
case 'katailham':
anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/katailham?apikey=IkyOgiwara`)
reply(`*Random Kata Ilham*\n${anu.result}`)
break
case 'katasindiran':
anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/skak?apikey=IkyOgiwara`)
reply(`*Random Kata Sindiran*\n${anu.result}`)
break
case 'pinterest':
if(!q) return reply(`Namanya? Contohnya\n${prefix + command} naruto`)
let pin = await hx.pinterest(q)
let ac = pin[Math.floor(Math.random() * pin.length)]
let di = await getBuffer(ac)
sticWait(from)
await Ryuu.sendMessage(from, di, image, { quoted: mek })
break
case 'setreply':
if (!isOwner) return sticOwner(from)
if (args.length ==0)return ('Text Reply Nya Mana?')
gg = args.join(" ")
fakeyoi = gg
reply(`Succes Mengganti Conversation Fake : ${q}`)
break
case 'setfake':
if (!isOwner) return sticOwner(from)
if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
delb = await Ryuu.downloadMediaMessage(boij)
fs.writeFileSync(`./gambar/fake.jpg`, delb)
reply('Sukses')
} else {
reply(`Kirim gambar dengan caption ${prefix}setfake`)
}
break	
case 'setthumb':
if (!isOwner) return sticOwner(from)
if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
delb = await Ryuu.downloadMediaMessage(boij)
fs.writeFileSync(`./gambar/thumb.jpg`, delb)
reply('Sukses')
} else {
reply(`Kirim gambar dengan caption ${prefix}setthumb`)
}
break	
case 'memeindo':
case 'darkjokes':

if (isBanned)return sticBanned(from)
sticWait(from)
zks = await fetchJson(`https://api.zeks.me/api/${command}?apikey=${zeksApi}`)
anu = zks.result
Ryuu.sendMessage(from, anu, image, { quoted: mek, caption: `*©Random ${comnand}*` })
break
case 'bneon':
case 'matrix':
case 'breakwall':
case 'gneon':
case 'dropwater':
case 'lithgtext':
case 'crismes':
case 'tfire':
case 'sandw':
case 'text3dbox':
case 'text3d':
case 'leavest':
case 'tlight':
case 'nulis':

if (isBanned)return sticBanned(from)
if (args.length ==0)return reply('Text nya mana?')
bp = args.join(" ")
sticWait(from)
zks = await getBuffer(`https://api.zeks.me/api/${command}?apikey=${zeksApi}&text=${bp}`)
Ryuu.sendMessage(from, zks, image, { quoted: mek, thumbnail: fs.readFileSync('./gambar/fake.jpg')})
break
case 'blackpink':
case 'neon_light':
case 'gaming':
case 'watercolor':
if (isBanned)return sticBanned(from)
if (args.length ==0)return reply('Text Nya Mana Kak?')
bo = args.join(" ")
sticWait(from)
jojo = await getBuffer(`https://docs-jojo.herokuapp.com/api/${command}?text=${bo}`)
Ryuu.sendMessage(from, jojo, image, { quoted: mek, thumbnail: fs.readFileSync('./gambar/fake.jpg')})
break
case 'tes':
if (isBanned)return sticBanned(from)
fakeText('*STATUS BOT : ONLINE*')
break
case 'cerpen':  
if (isBanned)return sticBanned(from)
anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/cerpen`)     
anu1 = `➻ *JUDUL* : ${anu.result.title}\n`
anu1 += `➻ *PENGARANG* : ${anu.result.pengarang}\n` 
anu1 += `➻ *KATEGORI* : ${anu.result.kategori}\n`
anu1 += `➻ *CERPEN* : ${anu.result.cerpen}\n`
reply(anu1)
break            
case 'tongue':  
if (isBanned)return sticBanned(from)
anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/tongue_twister`)
anu1 = `➻ *NIHH* : ${anu.result}`
reply(anu1)
break
case 'pantun': 
if (isBanned)return sticBanned(from)
anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/random_pantun`)
anu1 = `➻ *PANTUN* : \n${anu.result}\n` 
reply(anu1)
break 
case 'namaninja':  
if (isBanned)return sticBanned(from)
if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} Naruto*`)  
F = body.slice(11)
anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/ninja_name?name=${F}`)
anu1 = `➻ *NAMA* : ${anu.your_name}\n`
anu1 += `➻ *NINJA* : ${anu.result}\n`
reply(anu1)
break 
case 'fox':
case 'dog':
case 'cat':
case 'panda':
case 'red_panda':
case 'birb':
case 'koala':
case 'meme':
if (isBanned)return sticBanned(from)
sticWait(from)
anu = await fetchJson(`https://some-random-api.ml/img/${command}`)
res = await getBuffer(anu.link)
Ryuu.sendMessage(from, res, image, {caption: `*©Random ${command}*`, quoted: mek })
break
case 'estetikpic':
if (isBanned)return sticBanned(from)
sticWait(from)
este = await getBuffer(`https://api.zeks.me/api/estetikpic?apikey=${zeksApi}`)
Ryuu.sendMessage(from, este, image, { quoted: mek, caption: `*©Random ${command}*` })
break
case 'playstore':
if (isBanned)return sticBanned(from)
if(!c) return reply('*Mau Cari Aplikasi Apa?*')
let play = await hx.playstore(c)
let store = '\n❉─────────────────────❉\n'
for (let i of play){
store += `\n*「 _PLAY STORE_ 」*\n
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\n❉─────────────────────❉\n\n`
}
reply(store)
break
case 'ban':
if (!isOwner) return sticOwner(from)
bnnd = body.slice(5)
ban.push(`${bnnd}@s.whatsapp.net`)
fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
fakeText(`*@${bnnd}*\n_Telah Berhasil Dibanned ✓_`)
break
case 'unban':
if (!isOwner) return sticOwner(from)
bnnd = body.slice(7)
ban.splice(`${bnnd}@s.whatsapp.ne5t`)
fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
fakeText(`*@${bnnd}*\n_Telah Sukses Diunbanned ✓_`)
break
case 'addprem':
if (!isOwner) return sticOwner(from)
prmm = body.slice(9)
prem.push(`${prmm}@s.whatsapp.net`)
fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
reply(`*@${prmm}*\n_Berhasil Add User Premium ✓_`)
break
case 'delprem':
if (!isOwner) return sticOwner(from)
prmm = body.slice(9)
prem.splice(`${prmm}@s.whatsapp.ne5t`)
fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
reply(`*@${prmm}*\n_Berhasil Delete User Premium ✓_`)
break
case 'mediafire':

if (isBanned)return sticBanned(from)
md = fs.readFileSync('./gambar/logo/mdfire.jpg')
if (args.length < 1) return reply('Link Nya Mana? ')
if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply('Linknya Error :v')
sticWait(from)
teks = args.join(' ')
res = await mediafireDl(teks)
result = `*Data Berhasil Didapatkan!*
▢ Nama : ${res[0].nama}
▢ Ukuran : ${res[0].size}
▢ Link : ${res[0].link}

_*Tunggu Proses Upload Media......*_`
Ryuu.sendMessage(from, md, image, {quoted: mek, caption: result })
sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: mek})
break
case 'nekonime':
if (isBanned)return sticBanned(from)
sticWait(from)
ini_res = await fetchJson(`https://docs-jojo.herokuapp.com/api/nekonime`)
get_res = await getBuffer(ini_res.result)
Ryuu.sendMessage(from, get_res, image, { quoted: mek, caption: `*©Random ${command}*` })
break
case 'waifu':
if (isBanned)return sticBanned(from)
sticWait(from)
ini_res = await fetchJson(`https://docs-jojo.herokuapp.com/api/waifu2`)
get_res = await getBuffer(ini_res.img)
Ryuu.sendMessage(from, get_res, image, { quoted: mek, caption: `*©Random ${command}*` })
break
case 'husbu':
if (isBanned)return sticBanned(from)
sticWait(from)
ini_res = await fetchJson(`https://docs-jojo.herokuapp.com/api/husbuando`)
get_res = await getBuffer(ini_res.image)
Ryuu.sendMessage(from, get_res, image, { quoted: mek, caption: `*©Random ${command}*` })
break
case 'request':
case 'rq':
if (isBanned)return sticBanned(from)
if (args.length <1 )return reply(`Mau Request Fitur Apa?\nContohnya :\n${prefix + command} antilink`)
const cfrr = body.slice(8)
if (cfrr.length > 300) return Ryuu.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: mek})
var nomor = mek.participant
const ress = `*[ REQUEST FITUR ]*\nNomor : @${sender.split("@s.whatsapp.net")[0]}\nPesan : ${cfrr}`
var options = {
text: ress,
contextInfo: {mentionedJid: [nomor]},
}
Ryuu.sendMessage('6282316153393@s.whatsapp.net', options, text, {quoted: mek})
Ryuu.sendMessage('6282293271747@s.whatsapp.net', options, text, {quoted: mek})
reply('REQUEST ANDA TELAH SAMPAI KE PENGEMBANG SC, Requests palsu atau main² tidak akan ditanggapi.')
break
case 'bc':
case 'broadcast':
if (!isOwner) return sticOwner(from)
if (args.length < 1) return reply('teks?')
anu = await Ryuu.chats.all()
if (isMedia && !mek.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
bc = await Ryuu.downloadMediaMessage(encmedia)
for (let _ of anu) {
Ryuu.sendMessage(_.jid, bc, image, {quoted:freply,caption: `${body.slice(4)}`})
}
reply('Suksess broadcast')
} else {
for (let _ of anu) {
sendMess(_.jid, `${body.slice(4)}`)
}
reply('Suksess broadcast')
}
break
case 'waifu':
case 'neko':
case 'blowjob':
case 'trap':
case 'megumin':
case 'awoo':
case 'shinobu':
sticWait(from)
anu = await fetchJson(`https://waifu.pics/api/nsfw/${command}`)
buffer = await getBuffer(anu.url)
Ryuu.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./gambar/fake.jpg')})
break
case 'public':
if (!isOwner && !mek.key.fromMe) return sticOwner(from)
publik = true
fakeText('*Sukses mengubah mode public*')
break
case 'restart':
if (!isOwner && !mek.key.fromMe) return sticOwner(from) 
reply('_Restarting BOT_')
exec(`node main`)
setTimeout( () => {
	Ryuu.sendMessage(from, '_1_', text) // ur cods
	}, 3000) // 1000 = 1s,
	setTimeout( () => {
	Ryuu.sendMessage(from, '_2_', text) // ur cods
	}, 2000) // 1000 = 1s,
	setTimeout( () => {
	Ryuu.sendMessage(from, '_3_', text) // ur cods
	}, 1000) // 1000 = 1s,
	setTimeout( () => {
	Ryuu.sendMessage(from, `_Succses Restart BOT_`,text,{quoted: mek }) // ur cods
	},4000) // 1000 = 1s,
	break
case 'self':
if (!isOwner && !mek.key.fromMe) return sticOwner(from)
publik = false
fakeText('*Sukses mengubah mode self*')
break
case 'sticker':
case 's':
if (isBanned)return sticBanned(from)
sticWait(from)
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await Ryuu.downloadAndSaveMediaMessage(encmedia)
ran = '666.webp'
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply('error')
})
.on('end', function () {
Ryuu.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await Ryuu.downloadAndSaveMediaMessage(encmedia)
ran = '999.webp'
sticWait(from)
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
})
.on('end', function () {
Ryuu.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else {
reply(`Please send a picture or reply to an image with the caption ${prefix}sticker`)
}
break
case 'ytplay':
if (isBanned)return sticBanned(from)
if (args.length ==0)return reply('Judul nya Mana Kak?')
bo = args.join(" ")
sticWait(from)
ini = await fetchJson(`https://api.zeks.me/api/ytplaymp3?apikey=${zeksApi}&q=${bo}`)
gett = ini.result
yt1 =`*Judul :* ${gett.title}\n\n*FileSize :* ${gett.size}\n*Durasi :* ${gett.duration}\n*Source :*\n${gett.source}`
yt2 =`Silahkan Pilih Type Media Di Bawah`
ytg = fs.readFileSync('./gambar/logo/ytplay.jpg')
but = [
{ buttonId: `${prefix}ply4 ${args.join(" ")}`, buttonText: { displayText: '𝘷𝘪𝘥𝘦𝘰' }, type: 1 },
{ buttonId: `${prefix}ply3 ${args.join(" ")}`, buttonText: { displayText: '️𝘮𝘶𝘴𝘪𝘬' }, type: 1 }
]
sendButLoc(from, yt1, yt2, ytg, but)
break
case 'ply4':
if (isBanned)return sticBanned(from)
bo = args.join(" ")
sticLoad(from)
ini = await fetchJson(`https://api.zeks.me/api/ytplaymp4?apikey=${zeksApi}&q=${bo}`)
p4 = await getBuffer(get.url_video)
Ryuu.sendMessage(from, p4, video)
break
case 'ply3':
if (isBanned)return sticBanned(from)
bo = args.join(" ")
sticLoad(from)
ini = await fetchJson(`https://api.zeks.me/api/ytplaymp3?apikey=${zeksApi}&q=${bo}`)
p3 = await getBuffer(get.url_audio)
Ryuu.sendMessage(from, p3, audio)
break
case 'playmp4':
if (isBanned)return sticBanned(from)
if (args.length ==0)return reply('Judul nya Mana Kak?')
bo = args.join(" ")
sticWait(from)
ini = await fetchJson(`https://api.zeks.me/api/ytplaymp4?apikey=${zeksApi}&q=${bo}`)
get = ini.result
ini_txt =`Judul : ${get.title}\nFileSize : ${get.size}\nSource : ${get.source}\n\n*Media Lagi Di Kirim*`
ply4 = await getBuffer(get.thumbnail)
Ryuu.sendMessage(from, ply4, image, { quoted: mek, caption: ini_txt })
mp4 = await getBuffer(get.url_video)
sticLoad(from)
Ryuu.sendMessage(from, mp4, video)
break
case 'playmp3':
if (isBanned)return sticBanned(from)
if (args.length ==0)return reply('Judul nya Mana Kak?')
bo = args.join(" ")
sticWait(from)
anu = await fetchJson(`https://api.zeks.me/api/ytplaymp3?apikey=${zeksApi}&q=${bo}`)
get = anu.result
ini_txt =`*Judul* : ${get.title}\n*FileSize* : ${get.size}\n*Source* : ${get.source}\n\n*Media Lagi Di Kirim*`
ply3 = await getBuffer(get.thumbnail)
Ryuu.sendMessage(from, ply3, image, { quoted: mek, caption: ini_txt })
mp3 = await getBuffer(get.url_audio)
sticLoad(from)
Ryuu.sendMessage(from, mp3, audio)
break
case 'owner':
sendKontak(from, `${owner}`, `${ownerName}`)
break
case 'mekontak':
if (!isGroup) return sticGroup(from)
try {
sendkontak(from, `${sender.split("@")[0]}`, `${pushname}`) 
} catch (e) {
console.log('Error :', e)
reply('Maaf terjadi kesalahan dalam mengambil Data')
}
break
case 'ytmp4':
if (isBanned)return sticBanned(from)
if (args.length ==0)return reply('Link nya Mana Kak?')
ini_link = args.join(" ")
sticWait(from)
ini = await fetchJson(`https://api-yogipw.herokuapp.com/api/download/ytmp4?url=${ini_link}`)
anu = ini.result
ini_txt =`*Judul* : ${anu.title}\n*Author* : ${anu.channel}\n*Publis* : ${anu.published}\n*Views* : ${anu.views}`
yt4 = fs.readFileSync('./gambar/logo/ytdown.jpg')
Ryuu.sendMessage(from, yt4, image, { quoted: mek, caption: ini_txt })
res = await getBuffer(anu.url)
sticLoad(from)
Ryuu.sendMessage(from, res, video)
break
case 'ytmp3':
if (isBanned)return sticBanned(from)
if (args.length ==0)return reply('Link nya Mana Kak?')
ini_link = args.join(" ")
sticWait(from)
ini = await fetchJson(`https://api-yogipw.herokuapp.com/api/download/ytmp3?url=${ini_link}`)
get = ini.result
ini_txt =`*Judul* : ${get.title}\n*Author* : ${get.channel}\n*Publis* : ${get.published}\n*Views* : ${get.views}`
yt3 = fs.readFileSync('./gambar/logo/ytdown.jpg')
Ryuu.sendMessage(from, yt3, image, { quoted: mek, caption: ini_txt })
res = await getBuffer(get.url)
sticLoad(from)
Ryuu.sendMessage(from, res, audio)
break
case "closegc": 
if (!mek.key.fromMe && !isGroupAdmins) return sticAdmin(from)
if (!isBotGroupAdmins) return sticBotAdmin(from);
if (!isGroup) return sticGroup(from);
reply(`*GROUP BERHASIL DI TUTUP ADMIN ${pushname}*`);
Ryuu.groupSettingChange(from, GroupSettingChange.messageSend, true);
break; 
case "opengc":
if (!mek.key.fromMe && !isGroupAdmins) return sticAdmin(from)
if (!isBotGroupAdmins) return sticBotAdmin(from);
if (!isGroup) return sticGroup(from);
reply(`*GROUP BERHASIL DI BUKA ADMIN ${pushname}*`);
Ryuu.groupSettingChange(from, GroupSettingChange.messageSend, false);
break; 
case "tiktok":
if (isBanned)return sticBanned(from)
ttg = fs.readFileSync('./gambar/logo/tiktok.jpg')
res_nya = body.slice(8)
tt1 =`𝘛𝘪𝘬𝘛𝘰𝘬 - 𝘵𝘳𝘦𝘯 𝘥𝘪𝘮𝘶𝘭𝘢𝘪 𝘥𝘪 𝘴𝘪𝘯𝘪. 𝘋𝘪 𝘱𝘦𝘳𝘢𝘯𝘨𝘬𝘢𝘵 𝘢𝘵𝘢𝘶 𝘥𝘪 𝘸𝘦𝘣, 𝘱𝘦𝘯𝘰𝘯𝘵𝘰𝘯 𝘥𝘢𝘱𝘢𝘵 𝘮𝘦𝘯𝘰𝘯𝘵𝘰𝘯 𝘥𝘢𝘯 𝘮𝘦𝘯𝘦𝘮𝘶𝘬𝘢𝘯 𝘫𝘶𝘵𝘢𝘢𝘯 𝘷𝘪𝘥𝘦𝘰 𝘴𝘪𝘯𝘨𝘬𝘢𝘵 𝘺𝘢𝘯𝘨 𝘥𝘪𝘱𝘦𝘳𝘴𝘰𝘯𝘢𝘭𝘪𝘴𝘢𝘴𝘪.`
tt2 =`𝖲𝗂𝗅𝖺𝗁𝗄𝖺𝗇 𝖯𝗂𝗅𝗂𝗁 𝖬𝖾𝖽𝗂𝖺 𝖣𝗂 𝖡𝖺𝗐𝖺𝗁 𝗂𝗇𝗂`
but = [
{ buttonId: `${prefix}tt4 ${res_nya}`, buttonText: { displayText: '️𝘷𝘪𝘥𝘦𝘰 📽️' }, type: 1 },
{ buttonId: `${prefix}tt3 ${res_nya}`, buttonText: { displayText: '𝘮𝘶𝘴𝘪𝘬 🎵' }, type: 1 }
]
sendButLoc(from, tt1, tt2, ttg, but)
break

case "tt3":
if (isBanned)return sticBanned(from)
if (args.length < 1) return reply('Link Nya Mana Kak?')
ini_link = body.slice(5)
sticLoad(from)
anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/tiktok_audio?url=${ini_link}`)
ini = await getBuffer(anu.download)
Ryuu.sendMessage(from, ini, audio)
break

case "tt4":
if (isBanned)return sticBanned(from)
if (args.length < 1) return reply('Link Nya Mana Kak?')
ini_link = body.slice(5)
sticLoad(from)
anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/tiktok_nowm?url=${ini_link}`)
ini = await getBuffer(anu.download)
Ryuu.sendMessage(from, ini, video)
break

/*
Anjir liat case ampe sini dong 🤧

jangan nyolong loh
eh btw mau req case ape nih? 
chat wa gw di desk YouTube gw

req case nya jan yang aneh2_-*
*/

//━━━━━━━━━━━━━━━[ AKHIR ]━━━━━━━━━━━━━━━\\
default:
if (budy.startsWith('>')) {
console.log(color('[EVAL1]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval return`))
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
reply(`${evaled}`)
} catch (err) {
reply(`${err}`)
}
} else if (budy.startsWith('x')) {
console.log(color('[EVAL2]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval identy`))
try {
return Ryuu.sendMessage(from, JSON.stringify(eval(budy.slice(2)), null, '\t'), text, { quoted: mek })
} catch (err) {
e = String(err)
reply(e)
}
}
}
} catch (e) {
e = String(e)
if (!e.includes("this.isZero") && !e.includes("jid")) {
console.log('Error : %s', color(e, 'red'))
}
}
}


	
    
