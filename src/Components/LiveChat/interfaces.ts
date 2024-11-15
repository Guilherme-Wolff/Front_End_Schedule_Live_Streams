export interface ChatMessage {
    messageId: string;
    timestamp: string | number;
    user: {
        userId?: string;
        username: string;
        userRole: string;
    };
    message: {
        text: string;
        emotes?: string[];
        attachments?: { type: string; url: string }[];
    };
};



export interface ChatData {
    metadata: {
        liveStart: string;
    };
    chatLog: ChatMessage[];
}



export interface ChatMessageProps {
    messageId: string;
    timestamp: string | number;
    user: {
        username: string;
        userRole: string;
    };
    message: {
        text: string;
        emotes?: string[];
        attachments?: { type: string; url: string }[];
    };
}

interface User {
    userId: string;
    username: string;
    userRole: string;
}

interface Message {
    text: string;
    emotes: string[];
    attachments: any[];
}
