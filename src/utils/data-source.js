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
    {
        id: 3,
        isGroup: false,
        senderName: 'Anthony Baer',
        message: 'Sed mollis mi iaculis tincidu...',
        numberOfMessages: null,
        date: 'Sep 30',
        avatar: 'assets/images/avatar.png'
    },
    {
        id: 4,
        isGroup: false,
        senderName: 'Anthony Baer',
        message: 'Sed mollis mi iaculis tincidu...',
        numberOfMessages: 20,
        date: 'Sep 30',
        avatar: 'assets/images/avatar.png'
    },
    {
        id: 5,
        isGroup: true,
        groupName: 'Mom’s Discharge Plan',
        senderName: 'Anthony Baer',
        message: 'Sed mollis mi iaculis tincidu...',
        numberOfMessages: null,
        date: 'Sep 30',
        avatar: 'assets/images/avatar.png'
    },
    {
        id: 6,
        isGroup: true,
        groupName: 'Mom’s Discharge Plan',
        senderName: 'Anthony Baer',
        message: 'Sed mollis mi iaculis tincidu...',
        numberOfMessages: null,
        date: 'Sep 30',
        avatar: 'assets/images/avatar.png'
    },
    {
        id: 7,
        isGroup: false,
        senderName: 'Anthony Baer',
        message: 'Sed mollis mi iaculis tincidu...',
        numberOfMessages: null,
        date: 'Sep 30',
        avatar: 'assets/images/avatar.png'
    },
    {
        id: 8,
        isGroup: false,
        senderName: 'Anthony Baer',
        message: 'Sed mollis mi iaculis tincidu...',
        numberOfMessages: null,
        date: 'Sep 30',
        avatar: 'assets/images/avatar.png'
    },
    {
        id: 9,
        isGroup: true,
        groupName: 'Mom’s Discharge Plan',
        senderName: 'Anthony Baer',
        message: 'Sed mollis mi iaculis tincidu...',
        numberOfMessages: null,
        date: 'Sep 30',
        avatar: 'assets/images/avatar.png'
    },
    {
        id: 10,
        isGroup: false,
        senderName: 'Anthony Baer',
        message: 'Sed mollis mi iaculis tincidu...',
        numberOfMessages: null,
        date: 'Sep 30',
        avatar: 'assets/images/avatar.png'
    },
    {
        id: 11,
        isGroup: false,
        senderName: 'Anthony Baer',
        message: 'Sed mollis mi iaculis tincidu...',
        numberOfMessages: null,
        date: 'Sep 30',
        avatar: 'assets/images/avatar.png'
    },
]
export const conversationDetails = [
    {
        id: 1,
        type: 0, // action
        content: {
            headline: 'Daily grooming assistance',
            date: 'Dec 1',
            continues: 'Daily',
            note: 'assist with daily grooming activities such as bathing, teeth, hair',
            status: {
                name: 'done',
                icon: null
            },
            createdBy: {
                userId: 1,
                name: 'Derek Smith completed',
                date: 'Mar 23 3:23p',
                time: '12:20pm',
                avatar: null
            }
        }
    },
    {
        id: 2,
        type: 1, // plan
        content: {
            headline: 'Chest Pain',
            date: 'FRI Oct 12 4:27 PM',
            note: 'kbecker@gmail.com completed - THU Oct 11 3:29 PM',
            status: {
                name:'Severe',
                icon: 'assets/images/react.png'
            },
            hasHistory: true,
            createdBy: {
                userId: 2,
                name: 'SK',
                date: 'Mar 23 3:23p',
                time: '9:12am'
            }
        }
    },
    {
        id: 3,
        type: 2, // text
        content: {
            message: 'I moved Karen’s knitting kit from the study upstairs to the the living room.',
            createdBy: {
                userId: 3,
                name: 'SK',
                date: 'Mar 23 3:23p',
                time: '11:58am'
            }
        }
    },
    {
        id: 4,
        type: 2, // text
        content: {
            message: 'That’s a good call. I’ll be stopping by later to have dinner with her. Pizza for everyone! Join us. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a lorem enim. Praesent accumsan feugiat lorem et finibus. Vestibulum scelerisque id eros dignissim tincidunt. Morbi id tortor egestas, feugiat massa viverra, posuere nisl.',
            createdBy: {
                userId: 1,
                name: 'Derek Smith completed',
                date: 'Mar 23 3:23p',
                time: '1:45pm'
            }
        }
    }
];
