const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUR4NWxSemNXYTZadlZ4Z0Z2ZGN3Z2lpMFpHbCtZckoyU2NENVVOZmdWZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNE9QVTZPeTRGL1dPeFA4MUo5NGFUem00UGg4bkpuOGVxL2h2WjN4eGZFdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQnVpU2RKY01IWUNoYllPQk5tOXkxVk1Da2ZNZGFxMk1wTEZLMHUxUFdVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYK0gzTzZXQnFsclVYdnpFNDM0MFN4YWhSVCtDOWwvREt0MEdoYThtcnhvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9JUHFQTFA4UVNGVXk0c0Qra3hWUHVNTXFaRFltZFlrU3U3eTVLai9PSEk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InI5STZQOStCL0ltbDhIeG5MaDYrU1dJcG84dE5UMVp4RW1GTFc4WGJBaFk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0pBcXBlT1VxelFyYllhNlN6T2pPOWVmcENNYTVHbHBvOXh3NWlVRXdFOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZW9kdnRMa1V0eVBDVzdoaWV6SFpGajZoODJKbDhMUjEvZUxrQ0hNUHNHcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdzcTNobCt2MXhKSER3WldxNnh2NWw2RUw3azB1Y0JIWlEzcU9uclJneTFhMHlsNHdLQzMxb0s2Y2JoNzFacVJPNWZVZm5ITm15RGIyU2RsclJVK0FBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjUyLCJhZHZTZWNyZXRLZXkiOiJHbTY1aXN4M2JwbGpLZ2dweit3U0VxODE5VU1NSjg3TGMzOU5jZHlpQmFBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6ODEzLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6ODEzLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6Ik0yWk5QU1NUIiwibWUiOnsiaWQiOiIyNzY4OTgxMjg3Mzo3QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMjQ1NzMyOTQ2NzY4MDk2OjdAbGlkIiwibmFtZSI6IuG1gOG0tOG0sSDKgOG0nOG0m8qcyp/htIdzc+KAi+GthCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSUdOcUNJUXBjVE96Z1lZQVNBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoicTVlUWFyTkNLb0xQdS90Y09NQUx2TlNXWHM1b3ZKWmpNdjRyVlQ1aHh6VT0iLCJhY2NvdW50U2lnbmF0dXJlIjoidTNWOVhBakpMT2M3VEM2T0hnazg2RFlHcitQVWFxcXlmaXg4Zk90MG5yOTA4VmlUc0R5T3p5SjhkYldjMjNwby9WR3NNWERVdFQrZGFIaUI2eVVDQUE9PSIsImRldmljZVNpZ25hdHVyZSI6IjFMSlZMcDlSR2tLYUtLRXdTSTE2M1ZyN2NiLy9GdzM1YkVTMzdlZFcxYytkSVNDK2Y4aHVMaWVWK3MxbnpkeUJlNDM4dkNtQldKNWpGbnZ3RVdLNkN3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjQ1NzMyOTQ2NzY4MDk2OjdAbGlkIiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmF1WGtHcXpRaXFDejd2N1hEakFDN3pVbGw3T2FMeVdZekwrSzFVK1ljYzEifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBMElBZ2dTIn0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc3NTQ3NzI5NCwibGFzdFByb3BIYXNoIjoiM21sMWpTIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFNTUQifQ==",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY THERUTHLESS MD 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://image2url.com/r2/default/images/1775471479396-17fe03bf-1e2b-4068-b209-106c2a7b541c.png",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "THERUTHLESS MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "THERUTHLESS MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "👑,🔥,🫵,😂,🤧,☠️,😎,🌚,🌝,🫡,😶‍🌫️,🤝,🫴",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "27689812873",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*THERUTHLESS*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ THETUTHLESS TECH 👑*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://image2url.com/r2/default/images/1775471479396-17fe03bf-1e2b-4068-b209-106c2a7b541c.png",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> THE RUTHLESS ZONE🫡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "27689812873",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
