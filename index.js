const Discord = require("discord.js");
const client = new Discord.Client({disableEveryone: true})


client.on('message', message => { 

if (!message.guild) return; 

if (message.content === 'h!wara') { 
 if (!message.member.hasPermission("ADMINISTRATOR"))  return;
if (message.member.voiceChannel) { 

message.member.voiceChannel.join() 

.then(connection => { 


}) 

.catch(console.log); 

} else { 

message.reply('**e de hara voice ki da bhem mero🐱**'); 

} 

} 

});


client.on("message" , message => {

if(message.channel.type === 'dm') {

if (message.content.startsWith("https://discord.gg/")) {
    
  message.author.send(`  https://discord.gg/F8ng6crDU4`) ///Lin Server Never ///Dark Heilyam
    
  client.channels.get("ID Channel Partner").send(
`> Dark Heilyam Up | By: <@${message.author.id}> 
${message.content}`)
}
    }
        })




client.on('ready', () => {
console.log(`ON ${client.guilds.size} Servers`);
console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Send Me`) 
});




client.login("ODM0NTgyMjY3OTY3ODMyMTE1.YIC_Tg.NOXKcp6yNISo8q8VbuHadbVcsX0");///Dark Heilyam ///Token
