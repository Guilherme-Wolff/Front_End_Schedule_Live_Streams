import { useEffect, useState } from "react";

import { ChatData } from "../interfaces";



export const useLiveChat = (originalUrl: string) => {
    
    const [chatData, setChatData] = useState<ChatData>({
        metadata: {
            liveStart: '',
        },
        chatLog: []
    });
    useEffect(() => {
        const loadChatData = async (chat_url: string) => {

            return;
            try {
                const proxyUrl = 'https://corsproxy.io/?' + encodeURIComponent(chat_url);
                const url = !originalUrl.includes("http") ? `https://pd.cybar.xyz/${originalUrl}` : proxyUrl
                const response = await fetch(url);
                const text = await response.text();
                
                if (text) {
                    const data = JSON.parse(text) as ChatData;
                    setChatData(data);
                    console.log('Dados do chat carregados:', data);
                }
            } catch (error) {
                console.error('Erro ao carregar dados do chat:', error);
            }
        };

        loadChatData(originalUrl);
    }, []);


    return {
        chatData
    }

}
