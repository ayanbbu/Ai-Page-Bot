const fs = require('fs');
const moment = require('moment-timezone');

// ... (Other imports from your handleMessage.js file)

async function handleMessage(event) {
  // ... (Your existing code for handling messages)

  // Check if the message is "info"
  if (event.body && event.body.toLowerCase() === "info") {
    const botPrefix = "No prefix"; // Replace with your actual bot prefix
    const authorName = "Aljur Pogoy";
    const authorFB = "https://www.facebook.com/profile.php?id=100073129302064"; // Replace with actual Facebook link
    const now = moment().tz('Asia/Kathmandu');
    const date = now.format('MMMM Do YYYY');
    const time = now.format('h:mm:ss A');
    const uptime = process.uptime();
    const seconds = Math.floor(uptime % 60);
    const minutes = Math.floor((uptime / 60) % 60);
    const hours = Math.floor((uptime / (60 * 60)) % 24);
    const days = Math.floor(uptime / (60 * 60 * 24));
    const uptimeString = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;

    // Send the info message
    await sendMessage(event.senderID, `======[𝗕𝗼𝘁 𝗶𝗻𝗳𝗼:]======
    𝗕𝗼𝘁 𝗽𝗿𝗲𝗳𝗶𝘅: ${botPrefix}
    𝗕𝗼𝘁 𝗻𝗮𝗺𝗲 : Yae Miko 2nd Ruler of Inazuma
    𝗢𝘄𝗻𝗲𝗿: ${authorName} 
    𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸: [${authorName}] ${authorFB}
    𝗗𝗮𝘁𝗲: ${date}
    𝗧𝗶𝗺𝗲: ${time}
    𝗨𝗽𝘁𝗶𝗺𝗲: ${uptimeString}
    `);
  }

  // ... (Your existing code for handling other messages)
}

// ... (Rest of your handleMessage.js file)
      
