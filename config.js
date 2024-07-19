//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://instagram.com/abdul_basit_editz";
global.website = process.env.GURL || "https://instagram.com/abdul_basit_editz";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://instagram.com/abdul_basit_editz";
global.devs = "234906628353";
global.sudo = process.env.SUDO || "923457214057";
global.owner = process.env.OWNER_NUMBER || "923457214057";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://instagram.com/abdul_basit_editz";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUVpdjZ4TllYRjYrdmt2Sm1PVS83MTloNHZZVHF0VVJtNWVuUExSREVXTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYStnUU5FNnhYZ2ljckd4a1RxcnlQMEljaUFIU3hIbEVaajduYkRpQlBXbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtQTJNMG9YbVVJRDA4RHhJVE1JY0tsLytyTGtQUG1PR1oyQmd1VTlFc21VPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwY0lpbC9MWndkV2tHRjc1bkQzaVQxaXhVNkptUTM1NFA4Zk9ZMk1ZN1FrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVKa1RyUnlxRmlBL04rcUhIY2FRRkRBU2t6cG5BeTBURXQvc3AyY1hLbDQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlliUFFJK0YzSWxmNDNQN0ZnSnF6NDh0Y01jcWhLb3FlVUFYYnBHS0lOd2M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQVBTaDFmVHRJTDk3cldwOXl5R3pZeXlmRHp6V29WR2Y0dDZxeEZUZGNWdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVXYwU245T2R6cDk3R2s1dTZZVDRiZkpjcWo3ZkwyRGJyUkZiekNHZVoydz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVxNjlyTUFnbnZHdjVKZnhwWm5YOVRzS1hRbVFvdGE1ZnppVHN6cWx4Z3h6T2RBVGttQWptSVA0MDhlTEJHN2tSejZkUmUwRGRlVTV2YU55NVJCb0J3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTUwLCJhZHZTZWNyZXRLZXkiOiJuVDVHUkxTb3JHV2tqbFR0UFFKcjlFVzc2T2VwdkpEZkw3M0xBaWxKTUdJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJacmFLYTJrNlNXV1JuWFFQM25oV0ZRIiwicGhvbmVJZCI6IjQzMDM4MTliLTlhMWUtNGY1Zi05MDNjLTc0MGY4NmVmMDMyNiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1L0FRcUFWRDRLa3RxRmRBUnlnK1h2YVFYdHc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOVpPSHN4VWZFcWordG5Pd2N5WEI4blVUY2hBPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkpWQzIxNk5aIiwibWUiOnsiaWQiOiI5MjM0NTcyMTQwNTc6MjFAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ055SDdPd0RFSXVrNUxRR0dBVWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjRGVnpMRFgzRnhFd011WnA0anlDdmtFUUF3alBmUGxXdkd5QTRiVTMxQUk9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkpVUTFheURVMWJMMzUzbHp5R2EweVFkdkFmUGY0WGtKbVJZdHEzTXIxTzNNVllaQzlGa0dxUzY0c0VrUUUrQjBKQWhDcm43SHhramk0UE1QRElDTEFBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiI1N1JLS1F0MVpxeWJjeU5BbElUaGJ6SGMzMFg3d2JqNnRCT1pWL2NSeEF2d0ZYYWdjdy8vWnh2Ky94emdZellCdDZvNHB4aVFST0N5dXR0OFJXWnpDQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzQ1NzIxNDA1NzoyMUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJlQlZjeXcxOXhjUk1ETG1hZUk4Z3I1QkVBTUl6M3o1VnJ4c2dPRzFOOVFDIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIxMzA3NjcyLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUJRYyJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "꧁𝗔𝗕𝗗𝗨𝗟-𝗕𝗔𝗦𝗶𝗧꧂™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "꧁𝗔𝗕𝗗𝗨𝗟-𝗕𝗔𝗦𝗶𝗧꧂",
  ownername: process.env.OWNER_NAME || "꧁𝗔𝗕𝗗𝗨𝗟-𝗕𝗔𝗦𝗶𝗧꧂",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-X00anFgosmRhhWP75khXT3BlbkFJlyo7xhWoWhz9Sdoap9Hv",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
