const { GoatWrapper } = require('fca-liane-utils');

module.exports = {
  config: {
    name: "owner",
    aliases: ["info", "profile"],
    author: "Amit Max ⚡",
    role: 0,
    shortDescription: "Show owner's profile",
    longDescription: "Shows a short personal profile of the owner.",
    category: "profile",
    guide: "{pn}"
  },

  onStart: async function ({ api, event }) {
    const time = new Date().toLocaleString('en-US', { timeZone: 'Asia/Dhaka' });

    const profile = `
『 𝗦𝗔𝗭𝗭𝗔𝗗 𝗠𝗔𝗫 ⚡ 』

• Name: Sazzad Max ⚡  
• Class: Diploma Engeneering  
• Group: Civil Tecnology  
• Gender: Male  
• DOB: 01-05-2003  
• Religion: Islam  
• Blood: O+  
• Height: 5.8 ft  
• Location: Panir Tank, Dinajpur  
• Hobby: Flirting  
• Status: Life Time Single ☠️  
• FB:  https://www.facebook.com/=61578415994269
• Email: sazzuhere4@gmail.com  

⏰ Time: ${time}`;

    api.sendMessage(profile, event.threadID, (err, info) => {
      if (err) return console.error(err);
      setTimeout(() => {
        api.unsendMessage(info.messageID);
      }, 20000); // 20 seconds = 20000 ms
    });
  }
};

const wrapper = new GoatWrapper(module.exports);
wrapper.applyNoPrefix({ allowPrefix: true });
