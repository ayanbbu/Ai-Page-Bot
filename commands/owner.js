const axios = require("axios");
const fs = require('fs');
const path = require('path');
const moment = require('moment-timezone'); // Import moment for working with dates

module.exports = {
  name: 'owner',
  description: 'Get owner information and a video',
  author: 'Bard',
  async execute(senderId, args, pageAccessToken, sendMessage) {
    try {
      const ownerInfo = {
        name: 'Aljur Pogoy & jun jaam',
        gender: 'Male',
        age: 'over 5000 Years ago',
        height: 'Null',
        facebookLink: 'https://www.facebook.com/profile.php?id=100073129302064',
        nick: 'Kazuto Dev'
      };

      sendMessage(senderId, { text: 'Loading owner information and video...' }, pageAccessToken);

      try {
        // Download the video
        const videoUrl = 'https://i.imgur.com/TUIRctp.mp4'; // Replace with your Google Drive videoid link https://drive.google.com/uc?export=download&id=here put your video id
        const videoResponse = await axios.get(videoUrl, { responseType: 'arraybuffer' });
        const tmpFolderPath = path.join(__dirname, 'tmp');
        if (!fs.existsSync(tmpFolderPath)) {
          fs.mkdirSync(tmpFolderPath);
        }
        const videoPath = path.join(tmpFolderPath, 'owner_video.mp4');
        fs.writeFileSync(videoPath, Buffer.from(videoResponse.data, 'binary'));

        // Construct the response message
        const response = `
Owner Information:🧾
Name: ${ownerInfo.name}
Gender: ${ownerInfo.gender}
Age: ${ownerInfo.age}
Height: ${ownerInfo.height}
Facebook: ${ownerInfo.facebookLink}
Nick: ${ownerInfo.nick}
`;

        // Send the message with the video attachment
        await api.sendMessage({
          body: response,
          attachment: fs.createReadStream(videoPath)
        }, event.threadID, event.messageID);

        // Delete the temporary video file after sending
        fs.unlink(videoPath, (err) => {
          if (err) {
            console.error("Error deleting file:", err);
          } else {
            console.log("File deleted successfully:", videoPath);
          }
        });

      } catch (error) {
        console.error("Error occurred:", error);
        sendMessage(senderId, { text: `An error occurred: ${error.message}` }, pageAccessToken);
      } finally {
        sendMessage(senderId, { text: 'Owner information and video loaded!' }, pageAccessToken);
      }

    } catch (error) {
      console.error('Error getting owner information and video:', error);
      sendMessage(senderId, { text: 'There was an error getting owner information and video. Please try again later.' }, pageAccessToken);
    }
  }
};
                  
