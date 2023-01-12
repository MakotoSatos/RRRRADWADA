import { GatewayIntentBits, Collection, ButtonStyle } from 'discord.js';
import GuildConfig from './types/GuildConfig';
const Discord = require("discord.js")
const client = new Discord.Client();
export const internal = {
    token: 'MTA2Mjg3MjgzOTAzMzcyNTAxOA.G0Vjns.oDUBXpB5HCLNM3CXZIDhoxNgAJswMPbn55iDwY', // Токен бота (https://discord.com/developers/applications)
    mongoURL: 'mongodb+srv://Yang:917676ytrbn22@reydan.wvildtq.mongodb.net/?retryWrites=true&w=majority' // Ссылка на базы данных MongoDB (https://www.mongodb.com/)
}

export const intents: GatewayIntentBits[] | number = 131071 // Все интенты

export const cooldownVoiceJoin: number = 0

export const guilds = new Collection<string, GuildConfig>()

.set(
    '847882713082888223', // ID Сервера
    {
        defaultName: '⭐ {username}', // Дефолтное название комнаты (username это ник участника, можете убрать этот параметр, тогда будет просто ник участника)
        message: '1062883507501805629', // ID Сообщения (если сообщения нет, оставляете путсым, до заполнения)
        style: ButtonStyle.Secondary, // Стиль кнопок (выбирать из предложенных от класса)
        channels: {
            text: '1062872348602146916', // ID канала где расположится панель управления
            voice: '1062879110549999697', // ID голосового канала приваток
            category: '1062864831524372490' // ID категории где будут создаваться приватные комнаты
        },
        line: undefined, // Линия в панели управления (сейчас она не стоит, чтобы её поставить впишите "'https://...'" вместо "undefined")
        color: 0x6d3f5b, // Цвет embed'а сообщений
        dot: undefined, // Эмодзи перед эмодзи в панели комнаты (сейчас эмодзи не стоит, чтобы поставить впишите "'✏️'" вместо "undefined")
        buttons: { // Эмодзи и их описание :)
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
        placeholder: { // Заголовки у меню при выборе пользователя или канала
            user: '🔷 Выберите пользователя',
            channel: '🔷 Выберите приватную комнату'
        }
    }
)