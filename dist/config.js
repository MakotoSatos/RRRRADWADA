"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.guilds = exports.cooldownVoiceJoin = exports.intents = exports.internal = void 0;
const discord_js_1 = require("discord.js");
const Discord = require("discord.js");
const client = new Discord.Client();
exports.internal = {
    token: 'MTA2Mjg3MjgzOTAzMzcyNTAxOA.G0Vjns.oDUBXpB5HCLNM3CXZIDhoxNgAJswMPbn55iDwY',
    mongoURL: 'mongodb+srv://Yang:917676ytrbn22@reydan.wvildtq.mongodb.net/?retryWrites=true&w=majority' // Ссылка на базы данных MongoDB (https://www.mongodb.com/)
};
exports.intents = 131071; // Все интенты
exports.cooldownVoiceJoin = 0;
exports.guilds = new discord_js_1.Collection()
    .set('847882713082888223', // ID Сервера
{
    defaultName: '⭐ {username}',
    message: '1062883507501805629',
    style: discord_js_1.ButtonStyle.Secondary,
    channels: {
        text: '1062872348602146916',
        voice: '1062879110549999697',
        category: '1062864831524372490' // ID категории где будут создаваться приватные комнаты
    },
    line: undefined,
    color: 0x6d3f5b,
    dot: undefined,
    buttons: {
        'rename': {
            emoji: '✏️',
            title: 'Изменить название комнаты'
        },
        'limit': {
            emoji: '👥',
            title: 'Установить лимит пользователей'
        },
        'close': {
            emoji: '🔒',
            title: 'Закрыть/открыть доступ в комнату'
        },
        'hide': {
            emoji: '👁️',
            title: 'Скрыть/раскрыть комнату для всех'
        },
        'user': {
            emoji: '💋',
            title: 'Забрать/выдать доступ к комнате пользователю'
        },
        'speak': {
            emoji: '🔈',
            title: 'Забрать/выдать право говорить пользователю'
        },
        'kick': {
            emoji: '🤢',
            title: 'Выгнать пользователя из комнаты'
        },
        'reset': {
            emoji: '✂️',
            title: 'Сбросить права пользователю'
        },
        'owner': {
            emoji: '👑',
            title: 'Сделать пользователя новым владельцем'
        },
        'info': {
            emoji: '📔',
            title: 'Информация о комнате'
        }
    },
    placeholder: {
        user: '🔷 Выберите пользователя',
        channel: '🔷 Выберите приватную комнату'
    }
});
