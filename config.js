/* eslint-disable max-len */
const config = {
  token: 'NzM3MzU5MzY3NDk3NTgwNjA1.Xx8NbA.o5TrXwR244_WlCK5L5e3x6TBd0I',
  // Settings
  prefix: '%',
  verifiedRole: '',
  reddRole: '',
  headReddRole: '',
  modRole: '',
  headModRole: '',
  adminRole: '',
  staffChat: '',
  modMail: '',
  reportMail: '',
  actionLog: '',
  joinLeaveLog: '',
  modLog: '737399289226985642',
  
  // Newline Limit Settings
  newlineLimitChannels: [],
  newlineLimit: 10,
  imageLinkLimit: 3,

  // No-Mention channels
  noMentionChannels: ['channelID'],

  // Ban appeals
  banAppealLink: 'LINK',

  // UserDB
  userDBDefaults: {
    roles: [],
    nicknames: [],
    usernames: [],
    infractions: [],
    lastMessageTimestamp: 0,
  },

  // Bot Perms and Stuff
  ownerID: 'userID',

  admins: ['userID', 'userID'],

  ignoreMember: ['userID'],

  ignoreChannel: ['channelID'],

  support: ['userID', 'userID'],

  // Guild Perms and Stuff
  permLevels: [
    {
      level: 0,
      name: 'User',
      check: () => true,
    },
    {
      level: 1,
      name: 'Verified',
      check: (client, message) => {
        if (message.guild) {
          const verifiedRoleObj = message.guild.roles.cache.get(config.verifiedRole);

          if (verifiedRoleObj && message.member.roles.cache.has(verifiedRoleObj.id)) {
            return true;
          }
        }
        return false;
      },
    },
    {
      level: 2,
      name: 'Redd',
      check: (client, message) => {
        if (message.guild) {
          const reddObj = message.guild.roles.cache.get(config.reddRole);

          if (reddObj && message.member.roles.cache.has(reddObj.id)) {
            return true;
          }
        }
        return false;
      },
    },
    {
      level: 3,
      name: 'Head Redd',
      check: (client, message) => {
        if (message.guild) {
          const headReddObj = message.guild.roles.cache.get(config.headReddRole);

          if (headReddObj && message.member.roles.cache.has(headReddObj.id)) {
            return true;
          }
        }
        return false;
      },
    },
    {
      level: 4,
      name: 'Mod',
      check: (client, message) => {
        if (message.guild) {
          const modRoleObj = message.guild.roles.cache.get(config.modRole);

          if (modRoleObj && message.member.roles.cache.has(modRoleObj.id)) {
            return true;
          }
        }
        return false;
      },
    },
    {
      level: 5,
      name: 'Head Mod',
      check: (client, message) => {
        if (message.guild) {
          const headModRoleObj = message.guild.roles.cache.get(config.headModRole);

          if (headModRoleObj && message.member.roles.cache.has(headModRoleObj.id)) {
            return true;
          }
        }
        return false;
      },
    },
    {
      level: 6,
      name: 'Admin',
      check: (client, message) => {
        if (message.guild) {
          const adminRoleObj = message.guild.roles.cache.get(config.adminRole);

          if ((adminRoleObj && message.member.roles.cache.has(adminRoleObj.id)) || message.member.hasPermission('ADMINISTRATOR')) {
            return true;
          }
        }
        return false;
      },
    },
    {
      level: 7,
      name: 'Server Owner',
      check: (client, message) => {
        if (message.guild && message.author.id === message.guild.ownerID) {
          return true;
        }
        return false;
      },
    },
    {
      level: 8,
      name: 'Bot Support',
      check: (client, message) => config.support.includes(message.author.id),
    },
    {
      level: 9,
      name: 'Bot Admin',
      check: (client, message) => config.admins.includes(message.author.id),
    },
    {
      level: 10,
      name: 'Bot Owner',
      check: (client, message) => config.ownerID === message.author.id,
    },
  ],
};

module.exports = config;
