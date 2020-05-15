import { HomeIcon, ConversationIcon, ContactsIcon, SettingIcon } from './images-store';
export const sideMenuIcons = [HomeIcon, ConversationIcon, ContactsIcon, SettingIcon];
export const conversationsList = [
    {
        id: 1,
        isGroup: true,
        groupName: 'Mom’s Discharge Plan',
        senderName: 'Karen Becker',
        message: 'Sed mollis mi iaculis tincidu...',
        numberOfMessages: 2,
        date: 'Oct 12',
        avatar: 'assets/images/avatar.png'
    },
    {
        id: 2,
        isGroup: false,
        senderName: 'Anthony Baer',
        message: 'Sed mollis mi iaculis tincidu...',
        numberOfMessages: null,
        date: 'Sep 30',
        avatar: 'assets/images/avatar.png'
    },
]
