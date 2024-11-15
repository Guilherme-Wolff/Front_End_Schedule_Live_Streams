import "./Posts.scss"
import React, {
  lazy,
  ReactElement, useEffect,
  useState, useRef, Suspense
} from 'react'
import { apiSlice } from '../../redux/api/apiSlice'
import { RootState, useAppSelector, useAppDispatch } from "../../redux/store"

import { ModalState } from "./interfaces"
import {
  set_content_modal,
  close_modal
} from "../../redux/modal/reducer"

import { posts_home_array } from "../../redux/posts_home/posts_home"
import { ObjectInArrayOfObject, ObjectIsEmpty } from "../../utils/functions"
import { Post } from "../../types/types"
import { PostCard } from "./Video/PostCard"


import { fake_posts } from "./fake_posts"
import IsLoading from "../IsLoadin/IsLoading"


import { SuspensePost } from "./SuspensePost"
import { useParams } from 'react-router-dom';
//const PostCardDelay = lazy(() => delayForDemo(import('./PostCard')));
export function transformUrl(url: string): string {
  try {
    // Criar um objeto URL para facilitar a manipulação
    const urlObj = new URL(url);

    // Extrair o subdomínio e o domínio
    const hostParts = urlObj.hostname.split('.');
    const subdomain = hostParts[0];
    const domain = hostParts.slice(1).join('.');

    // Extrair o nome do arquivo completo (incluindo a extensão .mp4)
    const filename = urlObj.pathname.split('/').pop();

    // Verificar se o filename existe e termina com .mp4
    if (!filename || !filename.endsWith('.mp4')) {
      throw new Error('URL inválida: o arquivo não termina com .mp4');
    }

    // Construir a nova URL
    return `https://${subdomain}.${domain}/thumbs/${filename}_grid.png`;
  } catch (error) {
    console.error('Erro ao transformar URL:', error);
    return url; // Retorna a URL original em caso de erro
  }
}

export default function PostsHome() {

  const [lives, setLives] = useState<any[]>([]);
  let dispatch = useAppDispatch()
  let modal_post: ModalState = useAppSelector((state: RootState) => state.post_modal);

  /*if(!platform || streamer_name){
    
  }*/

  //const dispatch = useAppDispatch();
  const { data, isLoading, isError } = apiSlice.endpoints.getRecentLives.useQuery({
    skip: false,
  });
  if (data) {
    console.log("LIVES HOME", data)
  }

  useEffect(() => {
    if (data && !lives.length) {
      console.log("LIVES", data)
      // Processa os dados recebidos, por exemplo:
      const objectLive = data.map((live: any) => ({
        id: live.id,
        avatar: live?.avatar,
        streamer: live?.streamer,
        urls: live?.urls,
        thumbnail:transformUrl(live?.thumbnail) || '',
        platform: live?.platform,
        likes: live?.likes,
        views: live?.views,
        created_at: live?.created_at,
        chat:live?.chat || ''
      }));
      setLives(objectLive);
    }
  }, [data]); // Atualiza quando os dados mudam



  return (
    <div className='main'>
      <div className="main-post">
        <div onClick={() => modal_post.modal_state ? dispatch(close_modal()) : null} className={`${isLoading ? 'posts_is_loading' : 'posts'}`}>
          {isLoading && <div>Loading...</div>}
          {/*isError && <div>Error loading lives</div>*/ /* EM CASSO DE ERRO NO SERVER  */ } 
          {lives.length ? (
            lives.map((live) => (
              <PostCard key={live.id} post={live} />
            ))
          ) : (
            <div>No lives found</div>
          )}
        </div>
      </div>
    </div>
  );
}

