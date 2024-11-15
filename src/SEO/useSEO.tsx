import { useEffect } from "react"
import { useParams } from "react-router-dom";

export const useSEO = (DATA?: any) => {
    const { platform, streamer_name } = useParams();
    
    useEffect(() => {
        if(DATA && platform && streamer_name){
            const title  = document.title = `${streamer_name} on ${platform}`
            console.log("title", title)
            const description = document.querySelector('meta[name="description"]')
            if (description) {
                description.setAttribute('content', String(DATA))
            }
            return;
        }
        if(DATA){
            const description = document.querySelector('meta[name="description"]')
            if (description) {
                description.setAttribute('content', String(DATA))
            }
            return;
        }
        if(platform && streamer_name){
            const title  = document.title = `${streamer_name} on ${platform}`
            console.log("title", title)
            const description = document.querySelector('meta[name="description"]')
            if (description) {
                description.setAttribute('content', title)
            }
        }
    }, [])
}   
