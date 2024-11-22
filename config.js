const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="sahilagni66@gmail.com"
global.location="Lucknow,India."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com*";
global.gurl  =process.env.GURL  || "https://whatsapp.com";
global.website=process.env.GURL || "https://whatsapp.com" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© 𝐅𝖾ᥣ𝗂𝗑 𝐁ⱺ𝗍" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_03_00_11_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTQzLFxuICAgICAgICA4MixcbiAgICAgICAgOSxcbiAgICAgICAgMzksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDg4LFxuICAgICAgICAxMDksXG4gICAgICAgIDIzMCxcbiAgICAgICAgOTQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTgwLFxuICAgICAgICA3NixcbiAgICAgICAgMjE5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNzIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDIzLFxuICAgICAgICAxMyxcbiAgICAgICAgMTk1LFxuICAgICAgICA4NCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMDksXG4gICAgICAgIDY0LFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICA1MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNjEsXG4gICAgICAgIDEyLFxuICAgICAgICAxODksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjI2LFxuICAgICAgICA5MixcbiAgICAgICAgMjIxLFxuICAgICAgICA1OCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE3NixcbiAgICAgICAgNSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIxNixcbiAgICAgICAgNDgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTI1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA0NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNyxcbiAgICAgICAgOTUsXG4gICAgICAgIDg4LFxuICAgICAgICAxNyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDYxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMzYsXG4gICAgICAgIDg4LFxuICAgICAgICA5NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTY3LFxuICAgICAgICA1NCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTQxLFxuICAgICAgICA2MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjQsXG4gICAgICAgIDExMixcbiAgICAgICAgOTcsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgODMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTgzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDg5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMzgsXG4gICAgICAgIDU2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDU1LFxuICAgICAgICAxODQsXG4gICAgICAgIDQyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEyMixcbiAgICAgICAgNTgsXG4gICAgICAgIDUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTA4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIzLFxuICAgICAgICAyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgOTgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTY2LFxuICAgICAgICA1MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDk0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTc1LFxuICAgICAgICA5NSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMixcbiAgICAgICAgMjExLFxuICAgICAgICA1NCxcbiAgICAgICAgMTA3LFxuICAgICAgICAzMixcbiAgICAgICAgMTExLFxuICAgICAgICAxODEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjExLFxuICAgICAgICA5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE5NixcbiAgICAgICAgNDYsXG4gICAgICAgIDEwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxODQsXG4gICAgICAgIDY0LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTgxLFxuICAgICAgICA2MixcbiAgICAgICAgMTAyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTU4LFxuICAgICAgICA0NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTg4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNTksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNDksXG4gICAgICAgIDIwMixcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDgwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUyLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMDFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNixcbiAgICAgICAgMzAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQsXG4gICAgICAgIDU3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDI5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDY2LFxuICAgICAgICA2OSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDg4LFxuICAgICAgICA4OCxcbiAgICAgICAgNDUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDY5LFxuICAgICAgICAxNTksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTUxLFxuICAgICAgICA4OSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMzksXG4gICAgICAgIDkzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDI0LFxuICAgICAgICAyMCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMixcbiAgICAgICAgNTYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjA2LFxuICAgICAgICA5NixcbiAgICAgICAgMTMsXG4gICAgICAgIDY5LFxuICAgICAgICAxODcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMzksXG4gICAgICAgIDI0LFxuICAgICAgICA3OSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNDksXG4gICAgICAgIDExNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMjksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTI3LFxuICAgICAgICA4NixcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTg3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjZKVGxUOUtUQkJQVE40TjkveCtjRThlRFY0amVnSXYrYkFWRFI1bzIwT1U9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjNWU19UOVBhU2h1b2NkaU8wRHNlZXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNGVhYTk5MmYtOTkzMy00ZDI5LWI2OTAtNWM4NDJkOWE4MmQ1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2NCxcbiAgICAgIDIxLFxuICAgICAgMjA5LFxuICAgICAgMjI5LFxuICAgICAgMTUzLFxuICAgICAgOTIsXG4gICAgICAyNDAsXG4gICAgICAxOTIsXG4gICAgICAxNjEsXG4gICAgICAxODUsXG4gICAgICA1OSxcbiAgICAgIDE5OSxcbiAgICAgIDEzLFxuICAgICAgMTIyLFxuICAgICAgMTM2LFxuICAgICAgODYsXG4gICAgICAxNjksXG4gICAgICAxMTcsXG4gICAgICA5MyxcbiAgICAgIDIwNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTEsXG4gICAgICAyNTMsXG4gICAgICAxNjgsXG4gICAgICAxNzIsXG4gICAgICAxMyxcbiAgICAgIDEyNSxcbiAgICAgIDI5LFxuICAgICAgODIsXG4gICAgICAxNjUsXG4gICAgICAxNDcsXG4gICAgICA4NSxcbiAgICAgIDE0NyxcbiAgICAgIDI0LFxuICAgICAgMTIsXG4gICAgICA0NSxcbiAgICAgIDE4MixcbiAgICAgIDE3OSxcbiAgICAgIDIyMCxcbiAgICAgIDcsXG4gICAgICAyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjdGNU5SRkVTXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDcxODIyMzkyOjcwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxOTI3MDI4MTc3NjM0NTM6NzBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTGI3OWVvRUVMem4vN2tHR0FRZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJoVzhqQ1NjY09YcmE2VmNaTVJucCsrU3l2bGdhZGJZRlo4eC9LY25ialZjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkZhODROOGlieVJ5STRVSk1GbnMxY0hUTkt2QUJNNVpiYW91aTVoM1FDbTNZZTVRckdLZ0s5NlUrRCs2MFVkU0xjdmJXcHZWZmdYU01RY1BZVm9pd0JRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjFjNFVBaytPUFpxMi9Fc051bmhwN0tGc0tXenBzQTlEdzM2RUFabzFGbkNFUzNsVVNpRE81L3FUSThEQk5semtYSnkrNk1tZ3lra0RKMW5kUWM2TUF3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwNzE4MjIzOTI6NzBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgODdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMjI0NDQxNlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "A17_Md", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```𝐅𝖾ᥣ𝗂𝗑 𝐁ⱺ𝗍```", //*𝐅𝖾ᥣ𝗂𝗑 𝐁ⱺ𝗍*\n Naam Hi Kafi Hai"),
 
  author : process.env.PACK_AUTHER|| "𝕱ᥱᥣі᥊",
  packname: process.env.PACK_NAME || "𝕾һᥲһrᥙkһ 𝕶һᥲᥒ",
  botname : process.env.BOT_NAME  || "𝕱ᥱᥣі᥊",
  ownername:process.env.OWNER_NAME|| "𝕾һᥲһrᥙkһ 𝕶һᥲᥒ",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
