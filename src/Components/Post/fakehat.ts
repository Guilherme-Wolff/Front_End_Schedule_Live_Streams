interface ChatMessage {
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
}

interface ChatMetadata {
    metadata: {
        liveStart: string;
    };
    chatLog: ChatMessage[];
}



export const fake_chat: ChatMetadata = {
    metadata: {
        liveStart: "2024-09-04T15:00:00Z" // Início da live (ISO timestamp)
    },
    chatLog: [
        {
            messageId: "1",
            timestamp: 1, // Timestamp ISO
            user: {
                userId: "12345",
                username: "User1",
                userRole: "viewer"
            },
            message: {
                text: "Hello everyone! Hello everyone!Hello everyone!Hello everyone!Hello everyone!Hello everyone!Hello everyone!",
                emotes: [],
                attachments: []
            }
        },
        {
            messageId: "2",
            timestamp: 2,
            user: {
                userId: "67890",
                username: "Streamer",
                userRole: "host"
            },
            message: {
                text: "Welcome to the stream!",
                emotes: ["👋"],
                attachments: []
            }
        },
        {
            messageId: "3",
            timestamp: 3,
            user: {
                userId: "54321",
                username: "User2",
                userRole: "moderator"
            },
            message: {
                text: "Don't forget to follow!",
                emotes: ["👍"],
                attachments: []
            }
        },
        {
            messageId: "4",
            timestamp: 4,
            user: {
                userId: "54321",
                username: "User2",
                userRole: "moderator"
            },
            message: {
                text: "Don't forget to follow!",
                emotes: ["👍"],
                attachments: []
            }
        },
        {
            messageId: "5",
            timestamp: 5,
            user: {
                userId: "54321",
                username: "User2",
                userRole: "moderator"
            },
            message: {
                text: "Don't forget to follow!",
                emotes: ["👍"],
                attachments: []
            }
        },
        {
            messageId: "5",
            timestamp: 5,
            user: {
                userId: "515151515151",
                username: "Uset teste bla",
                userRole: "moderator"
            },
            message: {
                text: " __ >>>>>>> <<<< +++++++++++ olaolaolaoaloalo",
                emotes: ["👍"],
                attachments: []
            }
        },
        {
            messageId: "5",
            timestamp: 5,
            user: {
                userId: "515151515151",
                username: "Uset teste bla",
                userRole: "moderator"
            },
            message: {
                text: " __ >>>>>>> <<<< +++++++++++ olaolaolaoaloalo",
                emotes: ["👍"],
                attachments: []
            }
        },
        {
            messageId: "5",
            timestamp: 5,
            user: {
                userId: "515151515151",
                username: "Uset teste bla",
                userRole: "moderator"
            },
            message: {
                text: " __ >>>>>>> <<<< +++++++++++ olaolaolaoaloalo",
                emotes: ["👍"],
                attachments: []
            }
        },
        {
            messageId: "5",
            timestamp: 5,
            user: {
                userId: "515151515151",
                username: "Uset teste bla",
                userRole: "moderator"
            },
            message: {
                text: " __ >>>>>>> <<<< +++++++++++ olaolaolaoaloalo",
                emotes: ["👍"],
                attachments: []
            }
        },
        {
            messageId: "5",
            timestamp: 5,
            user: {
                userId: "515151515151",
                username: "Uset teste bla",
                userRole: "moderator"
            },
            message: {
                text: " __ >>>>>>> <<<< +++++++++++ olaolaolaoaloalo",
                emotes: ["👍"],
                attachments: []
            }
        },
        {
            messageId: "5",
            timestamp: 5,
            user: {
                userId: "515151515151",
                username: "Uset teste bla",
                userRole: "moderator"
            },
            message: {
                text: " __ >>>>>>> <<<< +++++++++++ olaolaolaoaloalo",
                emotes: ["👍"],
                attachments: []
            }
        },
        {
            messageId: "5",
            timestamp: 5,
            user: {
                userId: "515151515151",
                username: "Uset teste bla",
                userRole: "moderator"
            },
            message: {
                text: " __ >>>>>>> <<<< +++++++++++ olaolaolaoaloalo",
                emotes: ["👍"],
                attachments: []
            }
        },
        {
            messageId: "5",
            timestamp: 5,
            user: {
                userId: "515151515151",
                username: "Uset teste bla",
                userRole: "moderator"
            },
            message: {
                text: " __ >>>>>>> <<<< +++++++++++ olaolaolaoaloalo",
                emotes: ["👍"],
                attachments: []
            }
        },
        {
            messageId: "5",
            timestamp: 5,
            user: {
                userId: "515151515151",
                username: "Uset teste bla",
                userRole: "moderator"
            },
            message: {
                text: " __ >>>>>>> <<<< +++++++++++ olaolaolaoaloalo",
                emotes: ["👍"],
                attachments: []
            }
        },
        {
            messageId: "5",
            timestamp: 5,
            user: {
                userId: "515151515151",
                username: "Uset teste bla",
                userRole: "moderator"
            },
            message: {
                text: " __ >>>>>>> <<<< +++++++++++ olaolaolaoaloalo",
                emotes: ["👍"],
                attachments: []
            }
        },
        {
            messageId: "5",
            timestamp: 5,
            user: {
                userId: "515151515151",
                username: "Uset teste bla",
                userRole: "moderator"
            },
            message: {
                text: " __ >>>>>>> <<<< +++++++++++ olaolaolaoaloalo",
                emotes: ["👍"],
                attachments: []
            }
        },
        {
            messageId: "5",
            timestamp: 5,
            user: {
                userId: "515151515151",
                username: "Uset teste bla",
                userRole: "moderator"
            },
            message: {
                text: " __ >>>>>>> <<<< +++++++++++ olaolaolaoaloalo",
                emotes: ["👍"],
                attachments: []
            }
        },
        {
            messageId: "5",
            timestamp: 5,
            user: {
                userId: "515151515151",
                username: "Uset teste bla",
                userRole: "moderator"
            },
            message: {
                text: " __ >>>>>>> <<<< +++++++++++ olaolaolaoaloalo",
                emotes: ["👍"],
                attachments: []
            }
        },
        {
            messageId: "5",
            timestamp: 5,
            user: {
                userId: "515151515151",
                username: "Uset teste bla",
                userRole: "moderator"
            },
            message: {
                text: " __ >>>>>>> <<<< +++++++++++ olaolaolaoaloalo",
                emotes: ["👍"],
                attachments: []
            }
        },
        {
            messageId: "5",
            timestamp: 5,
            user: {
                userId: "515151515151",
                username: "Uset teste bla",
                userRole: "moderator"
            },
            message: {
                text: " __ >>>>>>> <<<< +++++++++++ olaolaolaoaloalo",
                emotes: ["👍"],
                attachments: []
            }
        },
        {
            messageId: "5",
            timestamp: 5,
            user: {
                userId: "515151515151",
                username: "Uset teste bla",
                userRole: "moderator"
            },
            message: {
                text: " __ >>>>>>> <<<< +++++++++++ olaolaolaoaloalo",
                emotes: ["👍"],
                attachments: []
            }
        },
        {
            messageId: "5",
            timestamp: 5,
            user: {
                userId: "515151515151",
                username: "Uset teste bla",
                userRole: "moderator"
            },
            message: {
                text: " __ >>>>>>> <<<< +++++++++++ olaolaolaoaloalo",
                emotes: ["👍"],
                attachments: []
            }
        },
        {
            messageId: "5",
            timestamp: 5,
            user: {
                userId: "515151515151",
                username: "Uset teste bla",
                userRole: "moderator"
            },
            message: {
                text: " __ >>>>>>> <<<< +++++++++++ olaolaolaoaloalo",
                emotes: ["👍"],
                attachments: []
            }
        },
        {
            messageId: "5",
            timestamp: 5,
            user: {
                userId: "515151515151",
                username: "Uset teste bla",
                userRole: "moderator"
            },
            message: {
                text: " __ >>>>>>> <<<< +++++++++++ olaolaolaoaloalo",
                emotes: ["👍"],
                attachments: []
            }
        },
        {
            messageId: "5",
            timestamp: 5,
            user: {
                userId: "515151515151",
                username: "Uset teste bla",
                userRole: "moderator"
            },
            message: {
                text: " __ >>>>>>> <<<< +++++++++++ olaolaolaoaloalo",
                emotes: ["👍"],
                attachments: []
            }
        },
        {
            messageId: "5",
            timestamp: 8,
            user: {
                userId: "54321",
                username: "User2",
                userRole: "moderator"
            },
            message: {
                text: "Don't forget to follow!",
                emotes: ["👍"],
                attachments: []
            }
        },
        {
            messageId: "5",
            timestamp: 10,
            user: {
                userId: "54321",
                username: "User2",
                userRole: "moderator"
            },
            message: {
                text: "Don't forget to follow!",
                emotes: ["👍"],
                attachments: []
            }
        },
        {
            messageId: "5",
            timestamp: 15,
            user: {
                userId: "54321",
                username: "User2",
                userRole: "moderator"
            },
            message: {
                text: "Don't forget to follow!",
                emotes: ["👍"],
                attachments: []
            }
        },
        {
            messageId: "5",
            timestamp: 20,
            user: {
                userId: "54321",
                username: "User2",
                userRole: "moderator"
            },
            message: {
                text: "Don't forget to follow!",
                emotes: ["👍"],
                attachments: []
            }
        },
    ]
}

export const fake_chat_timestemp = {
    metadata: {
        liveStart: "2024-09-04T15:00:00Z" // Início da live (ISO timestamp)
    },
    chatLog: [
        {
            messageId: "1",
            timestamp: "2024-09-04T15:03:25Z", // Timestamp ISO
            user: {
                userId: "12345",
                username: "User1",
                userRole: "viewer"
            },
            message: {
                text: "Hello everyone!",
                emotes: [],
                attachments: []
            }
        },
        {
            messageId: "2",
            timestamp: "2024-09-04T15:04:01Z",
            user: {
                userId: "67890",
                username: "Streamer",
                userRole: "host"
            },
            message: {
                text: "Welcome to the stream!",
                emotes: ["👋"],
                attachments: []
            }
        },
        {
            messageId: "3",
            timestamp: "2024-09-04T15:04:45Z",
            user: {
                userId: "54321",
                username: "User2",
                userRole: "moderator"
            },
            message: {
                text: "Don't forget to follow!",
                emotes: ["👍"],
                attachments: []
            }
        },
    ]
}
