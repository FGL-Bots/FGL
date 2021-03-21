/* eslint-disable max-len */
const config = {
  token: 'TOKEN HERE SIR',
  // MongoDB URI
  mongoURI: 'mongodb://user:pass@127.0.0.1:27017/?authSource=authdbname',

  // Raid Settings
  raidJoinsPerSecond: 60,
  raidJoinCount: 1,

  // Settings
  prefix: 'fl!',
  verifiedRole: "823262898482446396",
  botrevRole: '789941907563216897',
  modRole: '789935016690843708',
  srmodRole: '789935018192666635',
  jradminRole: '823264108903137300',
  adminRole: '789935015131742228',
  botadminRole: '792181964933038130',
  ownerRole: '789935014275317780',
  staffChat: '792273078335569950',
  modMail: '',
  reportMail: '',
  actionLog: '804763203698425856',
  joinLeaveLog: '790048313452789780',
  modLog: '804763203698425856',
  applyChannel: '823266222823964682',
  botChannel: '789946995929251840',
  staffCommands: '823266430845845534',

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
  ownerID: ['563808552288780322'],

  admins: ['', ''],

  ignoreMember: [''],

  ignoreChannel: [''],

  support: ['', ''],

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
      name: 'Bot Reviewer', // This is a Junior Moderator
      check: (client, message) => {
        if (message.guild) {
          const botrevObj = message.guild.roles.cache.get(config.botrevRole);

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

