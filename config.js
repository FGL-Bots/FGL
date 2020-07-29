/* eslint-disable max-len */
const config = {
  token: 'NzM3MzU5MzY3NDk3NTgwNjA1.Xx8NbA.o5TrXwR244_WlCK5L5e3x6TBd0I',
  // MongoDB URI
  mongoURI: 'mongodb://user:pass@127.0.0.1:27017/?authSource=authdbname',

  // Raid Settings
  raidJoinsPerSecond: 60,
  raidJoinCount: 1,

  // Settings
  prefix: '%',
  verifiedRole: "737405129682190356",
  jrmodRole: '',
  modRole: '',
  srmodRole: '',
  jradminRole: '',
  adminRole: '734297098597433364',
  botadminRole: '',
  ownerRole: '',
  staffChat: '733768995798384704',
  modMail: '',
  reportMail: '',
  actionLog: '733768995798384704',
  joinLeaveLog: '733768995798384704',
  modLog: '733768995798384704',
  applyChannel: '737697479436271673',
  botChannel: '738013262297432135',
  staffCommands: '738013354479714386',

  // Newline Limit Settings
  newlineLimitChannels: [],
  newlineLimit: 10,
  imageLinkLimit: 3,

  // No-Mention channels
  noMentionChannels: [''],

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
      name: 'User', // This is a regular unverified user.
      check: () => true,
    },
    {
      level: 1,
      name: 'Verified', // This is a verified user.
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
      name: 'Junior Moderator', // This is a Junior Moderator
      check: (client, message) => {
        if (message.guild) {
          const jrmodObj = message.guild.roles.cache.get(config.jrmodRole);

          if (jrmodObj && message.member.roles.cache.has(jrmodObj.id)) {
            return true;
          }
        }
        return false;
      },
    },
    {
      level: 3,
      name: 'Moderator', // This is a Moderator
      check: (client, message) => {
        if (message.guild) {
          const modObj = message.guild.roles.cache.get(config.modRole);

          if (modObj && message.member.roles.cache.has(modObj.id)) {
            return true;
          }
        }
        return false;
      },
    },
    {
      level: 4,
      name: 'Senior Moderator', // This is a Senior Moderator
      check: (client, message) => {
        if (message.guild) {
          const srmodRoleObj = message.guild.roles.cache.get(config.srmodRole);

          if (srmodRoleObj && message.member.roles.cache.has(srmodRoleObj.id)) {
            return true;
          }
        }
        return false;
      },
    },
    {
      level: 5,
      name: 'Junior Admin', // This is an Junior Admin and/or fallback role
      check: (client, message) => {
        if (message.guild) {
          const jradminRoleObj = message.guild.roles.cache.get(config.jradminRole);

          if ((jradminRoleObj && message.member.roles.cache.has(jradminRoleObj.id)) || message.member.hasPermission('ADMINISTRATOR')) {
            return true;
          }
        }
        return false;
      },
    },
    {
      level: 6,
      name: 'Admin', // This is an Admin
      check: (client, message) => {
        if (message.guild) {
          const adminRoleObj = message.guild.roles.cache.get(config.adminRole);

          if ((adminRoleObj && message.member.roles.cache.has(adminRoleObj.id))) {
            return true;
          }
        }
        return false;
      },
    },
    {
      level: 8,
      name: 'Bot Admin', // This is an Bot Admin
      check: (client, message) => {
        if (message.guild) {
          const botadminRoleObj = message.guild.roles.cache.get(config.botadminRole);

          if ((botadminRoleObj && message.member.roles.cache.has(botadminRoleObj.id))) {
            return true;
          }
        }
        return false;
      },
    },
    {
      level: 9,
      name: 'Server Owners', // This is an owner
      check: (client, message) => {
        if (message.guild) {
          const ownerRoleObj = message.guild.roles.cache.get(config.ownerRole);

           if ((ownerRoleObj && message.member.roles.cache.has(ownerRoleObj.id))) {
             return true;
           }
        }
        return false;
      }
    },
  ],
};

module.exports = config;
