
const fs = require('fs');
const path = require('path');

module.exports = {
  name: 'help',
  description: 'Show available commands',
  author: 'A Y AN',
  execute(senderId, args, pageAccessToken, sendMessage) {
    const commandsDir = path.join(__dirname, '../commands');
    const commandFiles = fs.readdirSync(commandsDir).filter(file => file.endsWith('.js'));

    const commands = commandFiles.map(file => {
      const command = require(path.join(commandsDir, file));
      return `➯《 ${command.name} 》\n  ➯ ${command.description}\n  ➯ Owner: A Y AN`;
    });

    const totalCommands = commandFiles.length;
    const pageSize = 5;
    const page = parseInt(args[0]) || 1;
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    const paginatedCommands = commands.slice(start, end);

    const helpMessage = `A Y A N Commands ✨\n━━━━━━━━━━━━━━━━━\n${paginatedCommands.join('\n\n')}\n\nPage ${page} of ${Math.ceil(totalCommands / pageSize)}\n━━━━━━━━━━━━━━━━━`;

    sendMessage(senderId, { text: helpMessage }, pageAccessToken);
  }
};
