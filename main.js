const {
WAConnection,
MessageType,
Presence,
Mimetype,
GroupSettingChange
} = require('@adiwajshing/baileys')
const fs = require('fs')
const { banner, start, success } = require('./lib/functions')
const { color } = require('./lib/color')
require('./index.js')
nocache('./index.js', module => console.log(`${module} Telah Di Update✓`))
const starts = async (Ryuu = new WAConnection()) => {
Ryuu.logger.level = 'warn'
Ryuu.version = [2, 2143, 8]
Ryuu.browserDescription = ["Ryuu Official", "safari", "windows 10"];
console.log(banner.string)
Ryuu.on('qr', () => {
console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan bang'))})
fs.existsSync('./session.json') && Ryuu.loadAuthInfo('./session.json')
Ryuu.on('connecting', () => {
start('2', 'Connecting...')})
Ryuu.on('open', () => {
success('2', 'Connected')})
await Ryuu.connect({timeoutMs: 30*1000})
fs.writeFileSync('./session.json', JSON.stringify(Ryuu.base64EncodedAuthInfo(), null, '\t'))
Ryuu.on('chat-update', async (message) => {
require('./index.js')(Ryuu, message)})}
function nocache(module, cb = () => { }) {
console.log('[ ! ]', `'${module}'`, 'Di pantau oleh RyuuBot')
fs.watchFile(require.resolve(module), async () => {
await uncache(require.resolve(module))
cb(module)})}
function uncache(module = '.') {
return new Promise((resolve, reject) => {
try {
delete require.cache[require.resolve(module)]
resolve()
} catch (e) {
reject(e)}})}

starts()