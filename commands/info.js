// ... (Other imports and code in your handleMessage.js)

async function handleMessage(event) {
  // ... (Your existing code for handling messages)

  // Check if the message is "uptime"
  if (event.body && event.body.toLowerCase() === "uptime") {
    const uptime = process.uptime();
    const seconds = Math.floor(uptime % 60);
    const minutes = Math.floor((uptime / 60) % 60);
    const hours = Math.floor((uptime / (60 * 60)) % 24);
    const days = Math.floor(uptime / (60 * 60 * 24));
    const uptimeString = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;

    await sendMessage(event.senderID, `The bot has been online for ${uptimeString}`);
  }

  // ... (Your existing code for handling other messages)
}

// ... (Rest of your handleMessage.js file)
