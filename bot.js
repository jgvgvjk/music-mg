const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require('fs');
const moment = require('moment');

client.on('ready',  () => {
    console.log('تم تشغيل :dragon  ');
    console.log(`Logged in as * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
    console.log(`Logged in as * [ " ${client.user.username} " ] Users! [ " ${client.users.size} " ]`);
    console.log(`Logged in as * [ " ${client.user.username} " ] channels! [ " ${client.channels.size} " ]`);
  });


client.on('message', message => {
    let embed = new Discord.RichEmbed()
 
     let args = message.content.split(' ').slice(1).join(' ');
      if(!message.channel.guild) return;
 if(message.content.split(' ')[0] == '$bc') {
          message.react("✔️")
           let embed = new Discord.RichEmbed()
     .setColor("#FF00FF")
     .setThumbnail(message.author.avatarURL)   
                                       .addField('تم الارسال بواسطة :', "<@" + message.author.id + ">")
                  message.channel.sendEmbed(embed);
         message.guild.members.forEach(m => {
             var bc = new Discord.RichEmbed()
 .addField('**● Sender  :**', `*** → ${message.author.username}#${message.author.discriminator}***`)
             .addField('***● Server  :***', `*** → ${message.guild.name}***`)               
     .setColor('#ff0000')
                  .addField('ّ', args)
             m.send(``,{embed: bc});
         });
     }
 })


 client.on('message', message => {
    var prefix = "$";
if(message.content === prefix + "muteall") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ليس لديك صلاحيات__**');
  message.channel.overwritePermissions(message.guild.id, {
SEND_MESSAGES: false

  }).then(() => {
      message.reply("**__تم تقفيل الشات__ :white_check_mark: **")
  });
    }

if(message.content === prefix + "unmuteall") {
            if(!message.channel.guild) return message.reply('** This command only for servers**');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');
  message.channel.overwritePermissions(message.guild.id, {
SEND_MESSAGES: true

  }).then(() => {
      message.reply("**__تم فتح الشات__:white_check_mark:**")
  });
    }
    


});

client.on('message', async message =>{
    var prefix = "$";
  
  const ms = require("ms");
  if (message.author.omar) return;
  if (!message.content.startsWith(prefix)) return;
  if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
  if(!message.member.hasPermission('MANAGE_ROLES')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `MANAGE_ROLES`' ).then(msg => msg.delete(6000))
  if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**I Don't Have `MANAGE_ROLES` Permission**").then(msg => msg.delete(6000))
  var command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  var args = message.content.split(" ").slice(1);
      if(command == "mute") {
      let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      if(!tomute) return message.reply("**يجب عليك المنشن اولاّ**:x: ") .then(m => m.delete(5000));
      if(tomute.hasPermission("MANAGE_MESSAGES"))return      message.channel.send('**للأسف لا أمتلك صلاحية** `MANAGE_MASSAGEES`');
      let muterole = message.guild.roles.find(`name`, "muted");
      //start of create role
      if(!muterole){
        try{
          muterole = await message.guild.createRole({
            name: "muted",
            color: "#000000",
            permissions:[]
          })
          message.guild.channels.forEach(async (channel, id) => {
            await channel.overwritePermissions(muterole, {
              SEND_MESSAGES: false,
              ADD_REACTIONS: false
            });
          });
        }catch(e){
          console.log(e.stack);
        }
      }
      //end of create role
      let mutetime = args[1];
      if(!mutetime) return message.reply("**يرجى تحديد وقت الميوت**:x:");
    
      await(tomute.addRole(muterole.id));
      message.reply(`<@${tomute.id}> تم اعطائه ميوت ومدة الميوت : ${ms(ms(mutetime))}`);
    
      setTimeout(function(){
        tomute.removeRole(muterole.id);
        message.channel.send(`<@${tomute.id}> **انقضى الوقت وتم فك الميوت عن الشخص**:white_check_mark: `);
      }, ms(mutetime));
    
    
    //end of module
    }
  
  
  if(command === `unmute`) {
    if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.sendMessage("**ليس لديك صلاحية لفك عن الشخص ميوت**:x: ").then(m => m.delete(5000));
  if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**I Don't Have `MANAGE_ROLES` Permission**").then(msg => msg.delete(6000))
  
    let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if(!toMute) return message.channel.sendMessage("**عليك المنشن أولاّ**:x: ");
  
    let role = message.guild.roles.find (r => r.name === "muted");
    
    if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("**لم يتم اعطاء هذه شخص ميوت من الأساس**:x:")
  
    await toMute.removeRole(role)
    message.channel.sendMessage("**لقد تم فك الميوت عن شخص بنجاح**:white_check_mark:");
  
    return;
  
    }
  });

  client.on('message', function(message) {
    if(!message.channel.guild) return;
if(message.content ===  '$color 150') {
if(message.member.hasPermission('MANAGE_ROLES')) {
setInterval(function(){})
message.channel.send('جاري عمل الالوان |✅')
}else{
message.channel.send('ما معاك البرمشن المطلوب  |❌')
}
}
});

client.on('message', message=>{
if (message.content ===  '$color 150'){
if(!message.channel.guild) return;
if(message.member.hasPermission('MANAGE_ROLES')) {
  setInterval(function(){})
    let count = 0;
    let ecount = 0;
for(let x = 1; x < 151; x++){
message.guild.createRole({name:x,
color: 'RANDOM'})
}
}
}
});
    
client.on('message', message => {
    id = client.user.id;
    guild = message.guild;
    emojiHasPermission = permission => {
      console.log(permission);
      if (guild.member(id).permissions.has(permission, false)) {
        return ':white_check_mark:';
      } else {
        return ':x:';
      }
    };
    if (message.content === '+per') {
    message.channel.send({embed: {
      title: ':tools: Permissions',
      color: 0x06DF00,
      fields: [
        {
  
          name: 'Administrator :',
          value: emojiHasPermission('ADMINISTRATOR'),
          inline: true
        },
        {
          name: 'Create Instant Invite :',
          value: emojiHasPermission('CREATE_INSTANT_INVITE'),
          inline: true
        },
        {
          name: 'Kick Members :',
          value: emojiHasPermission('KICK_MEMBERS'),
          inline: true
        },
        {
          name: 'Ban Members :',
          value: emojiHasPermission('BAN_MEMBERS'),
          inline: true
        },
        {
          name: 'Manage Channels :',
          value: emojiHasPermission('MANAGE_CHANNELS'),
          inline: true
        },
        {
          name: 'Manage Guild :',
          value: emojiHasPermission('MANAGE_GUILD'),
          inline: true
        },
        {
          name: 'Add Reactions :',
          value: emojiHasPermission('ADD_REACTIONS'),
          inline: true
        },
        {
          name: 'View Audit Log :',
          value: emojiHasPermission('VIEW_AUDIT_LOG'),
          inline: true
        },
        {
  
          name: 'Manage Messages :',
          value: emojiHasPermission('MANAGE_MESSAGES'),
          inline: true
        },
        {
          name: 'Embed Links :',
          value: emojiHasPermission('EMBED_LINKS'),
          inline: true
        },
        {
          name: 'Attach Files :',
          value: emojiHasPermission('ATTACH_FILES'),
          inline: true
        },
        {
          name: 'Read Message History :',
          value: emojiHasPermission('READ_MESSAGE_HISTORY'),
          inline: true
        },
        {
          name: 'Mention Everyone :',
          value: emojiHasPermission('MENTION_EVERYONE'),
          inline: true
        },
        {
          name: 'Use External Emojis :',
          value: emojiHasPermission('USE_EXTERNAL_EMOJIS'),
          inline: true
        },
        {
          name: 'Connect :',
          value: emojiHasPermission('CONNECT'),
          inline: true
        },
        {
          name: 'Speak :',
          value: emojiHasPermission('SPEAK'),
          inline: true
        },
        {
  
          name: 'Mute Members :',
          value: emojiHasPermission('MUTE_MEMBERS'),
          inline: true
        },
        {
          name: 'Deafen Members :',
          value: emojiHasPermission('DEAFEN_MEMBERS'),
          inline: true
        },
        {
          name: 'Move Members :',
          value: emojiHasPermission('MOVE_MEMBERS'),
          inline: true
        },
        {
          name: 'Use VAD :',
          value: emojiHasPermission('USE_VAD'),
          inline: true
        },
        {
          name: 'Change Nickname :',
          value: emojiHasPermission('CHANGE_NICKNAME'),
          inline: true
        },
        {
          name: 'Manage Nicknames :',
          value: emojiHasPermission('MANAGE_NICKNAMES'),
          inline: true
        },
        {
          name: 'Manage Roles :',
          value: emojiHasPermission('MANAGE_ROLES'),
          inline: true
        },
        {
          name: 'Manage Webhooks :',
          value: emojiHasPermission('MANAGE_WEBHOOKS'),
          inline: true
        },
        {
          name: 'Manage Emojis :',
          value: emojiHasPermission('MANAGE_EMOJIS'),
          inline: true
        }
      ]
    }
    });
    }
  });
  client.on('message', message => {
    var prefix = "$"
      if (message.author.omar) return;
      if (!message.content.startsWith(prefix)) return;
      var command = message.content.split(" ")[0];
      command = command.slice(prefix.length);
      var args = message.content.split(" ").slice(1);
      if (command == "kick") {
       if(!message.channel.guild) return message.reply('** This command only for servers**');
      if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
      if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
      var user = message.mentions.users.first();
      var reason = message.content.split(" ").slice(2).join(" ");
      if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
      if(!reason) return message.reply ("**اكتب سبب الطرد**");
      if (!message.guild.member(user).kickable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");
      const kickembed = new Discord.RichEmbed()
      .setAuthor(`KICKED!`, user.displayAvatarURL)
      .setColor("RANDOM")
      .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
      .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
      .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
      message.channel.send({embed : kickembed})
      user.send(reason).then(()=>{
    message.guild.member(user).kick();
      })
    }
    });
  



  client.on('message', message => {
var prefix = "$"
  if (message.author.omar) return;
  if (!message.content.startsWith(prefix)) return;
  var command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  var args = message.content.split(" ").slice(1);
  if (command == "ban") {
   if(!message.channel.guild) return message.reply('** This command only for servers**');
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**لايوجد لديك ` BAN_MEMBERS ` صلاحية**");
if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**ليس لدي صلاحيات لتبنيد العضو **");
var user = message.mentions.users.first();
  var reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user).banable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");
  const banembed = new Discord.RichEmbed()
  .setAuthor(`BAN!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  user.send(reason).then(()=>{
message.guild.member(user).kick();
  })
}
});

client.on("message", message => {
    var prefix = "$";
	var args = message.content.split(' ').slice(1); 
	var msg = message.content.toLowerCase();
	if( !message.guild ) return;
	if( !msg.startsWith( prefix + 'ppp' ) ) return;
	if( msg.toLowerCase().startsWith( prefix + 'roleremove' ) ){
 if (!message.member.hasPermission("ADMINISTRATOR"))  return message.reply("**للأسف ليس لديك صلاحية `ADMINISTRATOR`**").then(msg => msg.delete(5000));
if(!message.guild.member(client.user).hasPermission("ADMINISTRATOR")) return message.reply("**I Don't Have `ADMINISTRATOR` Permission**").then(msg => msg.delete(6000));
		if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد سحب منه الرتبة**' );
		if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );if( message.mentions.members.first() ){
			message.mentions.members.first().removeRole( role1 );
			return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم سحب من **');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.removeRole( role1 ))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من الكل رتبة**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البوتات رتبة**');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البشريين رتبة**');
		} 	
	} else {
		if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد اعطائها الرتبة**' );
		if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );if( message.mentions.members.first() ){
			message.mentions.members.first().addRole( role1 );
			return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم اعطاء **');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.addRole( role1 ))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء الكل رتبة**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البوتات رتبة**');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البشريين رتبة**');
		} 
	} 
});

let points = JSON.parse(fs.readFileSync('./fkk/3wasmPTS.json', 'utf8'));
     
var prefix = "$";

client.on('message', message => {
	if (!points[message.author.id]) points[message.author.id] = {
		points: 0,
		};
	if (message.content.startsWith(prefix + 'لغز')) {
		if(!message.channel.guild) return
	
	const type = require('./fkk/quiz.json');
	const item = type[Math.floor(Math.random() * type.length)];
	const filter = response => {
			return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
	};
	message.channel.send('**لديك 10 ثانية لتجيب**').then(msg => {
	
				
	msg.channel.send(`${item.type}`).then(() => {
					message.channel.awaitMessages(filter, { maxMatches: 1, time: 10000, errors: ['time'] })
					.then((collected) => {
			message.channel.send(`${collected.first().author} ✅ **مبروك لقد كسبت نقطه
	لمعرفة نقطاك الرجاء كتابة .نقاطي**`);
			console.log(`[Typing] ${collected.first().author} typed the word.`);
				let userData = points[message.author.id];
				userData.points++;
						})
						.catch(collected => {
							message.channel.send(`:x: **خطأ حاول مرة اخرى**`);
				console.log('[Typing] Error: No one type the word.');
						})
			})
		})
	}
	});
    client.on('message', message => {
        if (message.content.startsWith(prefix + 'نقاطي')) {
            if(!message.channel.guild) return
            let userData = points[message.author.id];
            let embed = new Discord.RichEmbed()
            .setAuthor(`${message.author.tag}`, message.author.avatarURL)
            .setColor('#000000')
            .setDescription(`نقاطك: \`${userData.points}\``)
            message.channel.sendEmbed(embed)
          }
          fs.writeFile("./fkk/3wasmPTS.json", JSON.stringify(points), (err) => {
            if (err) console.error(err)
          })
        });
        

        client.on("message", async message => {
            var prefix = '$';
            if(message.author.bot) return;
              if(message.channel.type === "dm") return;
              let user = message.mentions.users.first();
              var men = message.mentions.users.first();
                 var heg;
                 if(men) {
                     heg = men
                 } else {
                     heg = message.author
                 }
               var mentionned = message.mentions.members.first();
                  var h;
                 if(mentionned) {
                     h = mentionned
                 } else {
                     h = message.member
                 }
          
            let messageArray = message.content.split(" ");
            let command = messageArray[0];
            let args = messageArray.slice(1);
              moment.locale('ar-TN');
            if(command === `${prefix}id`) {
              let embed = new Discord.RichEmbed()
                .setAuthor(message.author.username, message.author.avatarURL)
                .setDescription(`تفاصيل حساب : ${message.author.username}`)
                .setColor("#9932CC")
                .setThumbnail("https://i.imgur.com/GnR2unD.png")
                .addField("اسمك الكامل", `${message.author.username}#${message.author.discriminator}`)
                .addField("أيدي", message.author.id)
                      .addField(': دخولك لديسكورد قبل', `${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} **\n** \`${moment(heg.createdTimestamp).fromNow()}\``)
                                .addField(': انضمامك لسيرفر قبل', `${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')} \n \`${moment(h.joinedAt).fromNow()}\``)
                      .setThumbnail(message.author.avatarURL)
                      
          
              message.channel.sendEmbed(embed);
          
              return;
            }
        
        
            
        });

        client.on('message', message => {
            if (message.content.startsWith("رابط")) {
                message.channel.createInvite({
                thing: true,
                maxUses: 1,
                maxAge: 3600,
            }).then(invite =>
              message.author.sendMessage(invite.url)
            )
            const embed = new Discord.RichEmbed()
                .setColor("RANDOM")
                  .setDescription(" تم أرسال الرابط برسالة خاصة ")
                   .setAuthor(client.user.username, client.user.avatarURL)
                         .setAuthor(client.user.username, client.user.avatarURL)
                        .setFooter('طلب بواسطة: ' + message.author.tag)
        
              message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
                      const Embed11 = new Discord.RichEmbed()
                .setColor("RANDOM")
                
            .setDescription(" مدة الرابط : ساعه  عدد استخدامات الرابط : 1 ")
              message.author.sendEmbed(Embed11)
            }
        }); 



client.on("message", message => {
    const prefix = "$"
              
          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === prefix + "image"){ 
          const embed = new Discord.RichEmbed()
  
      .setTitle(`This is  ** ${message.guild.name} **  Photo !`)
  .setAuthor(message.author.username, message.guild.iconrURL)
    .setColor(0x164fe3)
    .setImage(message.guild.iconURL)
    .setURL(message.guild.iconrURL)
                    .setTimestamp()

   message.channel.send({embed});
      }
  });

  client.on('message', message => {
    if (message.content.startsWith("$avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
    var prefix = "$";
    
      if (!message.content.startsWith(prefix)) return;
      var args = message.content.split(' ').slice(1);
      var argresult = args.join(' ');
      if (message.author.id == 428733432731009024) return;
    
    
    if (message.content.startsWith(prefix + 'playing')) {
    if (message.author.id !== '234454368072630283') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
    client.user.setGame(argresult);
        message.channel.sendMessage(`**${argresult}** : تم تغيير الحالة`)
    } else
    
     
    if (message.content.startsWith(prefix + 'streem')) {
    if (message.author.id !== '354653862533136387') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
    client.user.setGame(argresult, "http://twitch.tv/HP");
        message.channel.sendMessage(`**${argresult}** :تم تغيير الحالة الى ستريمنج`)
    } else
    
    if (message.content.startsWith(prefix + 'setname')) {
    if (message.author.id !== '354653862533136387') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
      client.user.setUsername(argresult).then
          message.channel.sendMessage(`**${argresult}** : تم تغير الأسم`)
      return message.reply("**لا تستطيع تغير الأسم الا بعد ساعتين**");
    } else
        
    if (message.content.startsWith(prefix + 'setavatar')) {
    if (message.author.id !== '354653862533136387') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
    client.user.setAvatar(argresult);
        message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
    } else
    
    
    if (message.content.startsWith(prefix + 'watching')) {
    if (message.author.id !== '234454368072630283') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
        client.user.setActivity(argresult, {type : 'watching'});
     message.channel.sendMessage(`**${argresult}** : تم تغيير الووتشينق الى`)
    }
    
     });

 client.login(process.env.BOT_TOKEN);
