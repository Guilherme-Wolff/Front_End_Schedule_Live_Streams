import '../video_controls.scss'
import "./PostCard.scss"
import "../PostModal/PostCardModal.scss"

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  format, render, cancel, register
} from 'timeago.js';

import useSWR from 'swr'
import { Post } from "../../../types/types"
import { posts_like, posts_unlike } from "../../../redux/posts_home/posts_home"
import { RootState, useAppSelector, useAppDispatch } from "../../../redux/store"

import { BottomOptions } from "../BottomOptions/BottomOptions"

//import ReactHlsPlayer, { HlsPlayerProps } from 'react-hls-player';

import Hls from "hls.js";
import Plyr, { usePlyr, APITypes, PlyrProps, PlyrInstance } from "plyr-react";
import 'plyr/dist/plyr.css';

//import { PlyrPlus } from 'plyrplus'; bliblioteca de terceiros


import {
  set_content_modal,
  close_modal
} from "../../../redux/modal/reducer"

import React, { useRef, Suspense } from 'react';
import { ModalState } from "../interfaces"
import { Options } from 'plyr';
import axios from 'axios';



interface VideoProps {
  src: string;
}



const HlsPlayer: React.FC<VideoProps> = ({ src }) => {


  /*const globalRequestInterceptor = (config: any) => {
  // Verifique se config.headers existe antes de atribuir valores
  if (config.headers) {
    config.headers['Host'] = 'i-kebab.bunkr.ru';
    config.headers['Referer'] = 'https://bunkrr.su';
    //config.headers['Sec-Fetch-Mode'] = 'no-cors'; // Adicionando Sec-Fetch-Mode
    //config.headers['Sec-Fetch-Site'] = 'cross-site'; // Adicionando Sec-Fetch-Site
  }
  return config;
  };*/

  // Configurando o interceptador global para todas as bibliotecas HTTP
  const configureGlobalInterceptors = () => {
    // Axios
    /*if (axios) {
      axios.interceptors.request.use(globalRequestInterceptor, (error: any) => {
        return Promise.reject(error);
      });
    }*/


    if (window.fetch) {
      const originalFetch = window.fetch;
      window.fetch = function (input: RequestInfo | URL, init?: RequestInit): Promise<Response> {
        const url = typeof input === 'string' ? input : input.toString();
        init = init || {};

        if (!init.headers) {
          init.headers = new Headers(); // Use Headers object for type safety
        }

        (init.headers as Headers).set('Cookie', 'pd_auth_key=12679701-ccb2-4be5-8130-08f4b531480e');
        (init.headers as Headers).set('Host', 'pixeldrain.com'); // Use set method for clarity
        (init.headers as Headers).set('Referer', 'bunkrr.su');
        (init.headers as Headers).set('Sec-Fetch-Mode', 'no-cors'); // Adicionando Sec-Fetch-Mode
        //(init.headers as Headers).set('Sec-Fetch-Site', 'cross-site'); // Adicionando Sec-Fetch-Site
        (init.headers as Headers).set('Accept', 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7');
        (init.headers as Headers).set('Accept-Encoding', 'gzip, deflate, br');
        (init.headers as Headers).set('Connection', 'keep-alive');
        // (init.headers as Headers).set('', '');


        originalFetch.apply(this, [url, init]);
        return fetch(input, init);
      };
    }

    // Adicione outros interceptadores para outras bibliotecas HTTP aqui, se necessário
  };

  // Configurar interceptadores globais assim que o aplicativo for carregado
  //configureGlobalInterceptors();

  function configureGlobalXhrInterceptor_() {
    // Salvar a referência original para XMLHttpRequest
    const originalXhrOpen = XMLHttpRequest.prototype.open;

    // Substituir XMLHttpRequest.prototype.open com uma função personalizada
    XMLHttpRequest.prototype.open = function (
      method: string,
      url: string | URL,
      async?: boolean | null,
      username?: string | null,
      password?: string | null
    ) {
      // Adicionar o cabeçalho Host ao objeto XMLHttpRequest antes de enviar a solicitação
      this.setRequestHeader('Cookie', 'pd_auth_key=12679701-ccb2-4be5-8130-08f4b531480e'); // Substitua 'seu-host.com' pelo host desejado
      //this.setRequestHeader('Referer', 'bunkrr.su');

      // Converter o objeto IArguments em um array
      const args: [string, string, any] = [method, String(url), async || true];

      // Chamar a implementação original de XMLHttpRequest.prototype.open com os argumentos corretos
      return originalXhrOpen.apply(this, args);

    };
  }



  console.log("URL M3U8", src)
  const ref = useRef<APITypes>(null);

  useEffect(() => {
    const loadVideo = async () => {
      const video = document.getElementById("plyr") as HTMLVideoElement;
      //video.crossOrigin = 'use-credentials'

      //video.crossOrigin = 'use-credentials'
      const config = {
        xhrSetup: function (xhr: any, url: any) {
          // Adicione aqui os cookies necessários à solicitação
          xhr.withCredentials = true; // Isso permite que o navegador envie cookies
          xhr.setRequestHeader('Cookie', 'pd_auth_key=fd07e276-f93c-4980-961d-0b8a125a5f95');
        }
      };


      if (src.includes('pixeldrain')) {
        const hls = new Hls(config);
        hls.loadSource('data:text/plain;charset=utf-8,' + encodeURIComponent(src));
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          (ref.current!.plyr as PlyrInstance).play();
        });
      } else if (src.includes('m3u8')) { // Caso contrário, carrega um arquivo MP4
        video.src = src;
        video.addEventListener('loadedmetadata', () => {
          video.play();
        });
      }

    };
    loadVideo();
  }, []);


  return (
    <Plyr
      //className=''
      id="plyr"
      options={{ volume: 0.5 }}
      source={{} as PlyrProps["source"]}
      ref={ref}

    //crossOrigin={'use-credentials'}


    />
  );
};

//////////////////////////
const CardVideoHLS: React.FC<VideoProps> = ({ src }) => {
  console.log("URL M3U8 :", src)
  const ref = useRef<APITypes>(null);
  useEffect(() => {
    const loadVideo = async () => {
      const video = document.getElementById("plyr") as HTMLVideoElement;
      var hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(video);
      // @ts-ignore
      ref.current!.plyr.media = video;

      hls.on(Hls.Events.MANIFEST_PARSED, function () {
        (ref.current!.plyr as PlyrInstance).play();
      });
    };
    loadVideo();
  });

  return (
    <Plyr

      id="plyr"
      options={{ volume: 0.1 }}
      source={{} as PlyrProps["source"]}
      ref={ref}
    />
  );
};

export const PostCard = ({ post }: Post | any) => {

  const [blob_value, setBlob] = useState<Blob>(new Blob)
  const [text_value, setText] = useState<string>('');

  let modal_post: ModalState = useAppSelector((state: RootState) => state.post_modal);

  const [m3u8Content, setM3u8Content] = useState('');
  const [liveLink, setLiveLink] = useState<string>('');
  //console.log("LINK",liveLink)


  console.log("REGISTRO_TEST modal_post", modal_post)

  let {

    post_id, date, userminilogo,
    createdby, thumbnail, url, likes, comments, bio
  } = post

  const supported = Hls.isSupported();

  const readBlob = (blob: Blob) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target?.result) {
        setText(event.target.result as string);
        console.log("texto", event.target.result as string)
      }
    };
    reader.readAsText(blob);
  };
  //downloadM3u8(url[0])
  //================================================





  let dispatch = useAppDispatch()

  const _headers = {
    //'Referrer-Policy': 'strict-origin-when-cross-origin',
    //'method': 'GET',
    //"Authorization": "Basic " + btoa(":" + 'fd07e276-f93c-4980-961d-0b8a125a5f95'),
    'Accept': '*/*',
    'Accept-Encoding': 'identity;q=1, *;q=0',
    'Accept-Language': 'pt-BR,pt;q=0.9',
    'Cookie': 'pd_auth_key=fd07e276-f93c-4980-961d-0b8a125a5f95',
    //'If-Range': 'Mon, 01 Apr 2024 16:50:31 GMT',
    //'Range': 'bytes=720896-54099967',
    'Referer': 'https://pixeldrain.com/u/RB1U9ac8',
    'Sec-Ch-Ua': '"Not A(Brand";v="99", "Opera GX";v="107", "Chromium";v="121"',
    'Sec-Ch-Ua-Mobile': '?0',
    //'Sec-Ch-Ua-Platform': '"Android"',
    //'Sec-Fetch-Dest': 'video',
    'Sec-Fetch-Mode': 'cors',
    //'Sec-Fetch-Site': 'same-origin',
    'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Mobile Safari/537.36'
  }

  const fetcher = async () => {
    const response = await fetch('https://pixeldrain.com/api/file/RB1U9ac8',{
      headers:_headers
    });
    if (!response.ok) {
      throw new Error('Erro na solicitação!');
    }
    return response.text();
    /*if (response.ok) {
      return response;
    }*/
  };

  const { data, error, isLoading } = useSWR('https://pixeldrain.com/api/file/RB1U9ac8', fetcher)
  console.log("texto", data)





  const handleDownload = async () => {
    //const api_key = "adb3c19e-7fe0-4d12-a5f0-d15b8a194f72"




    //try {

    /* const response = await fetch('https://pixeldrain.com/api/file/F9KdESRr', {
       method: 'GET',
       headers: _headers
     }); // Substitua 'https://example.com/file.txt' pelo URL do seu arquivo*/
    //const data_ = await data; // Converte a resposta para texto
    const name_file = 'file.m3u8'
    if (data) {
      const resp_blob = new Blob([data], { type: 'application/x-mpegURL' }); // Cria um Blob a partir dos dados
      setBlob(resp_blob)
    }

    // Cria um link temporário para o Blob
    const url = window.URL.createObjectURL(blob_value);
    console.log("LINK1",url)
    // Cria um elemento de link para iniciar o download
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('', name_file); // Define o nome do arquivo para download
    document.body.appendChild(link);
    console.log("LINK2", link)

    // Inicia o download
    link.click();

    // Remove o link temporário
    window.URL.revokeObjectURL(url);
    document.body.removeChild(link);
    /*} catch (error) {
      console.error('Erro ao baixar o arquivo:', error);
    }*/
  };

  const readBlob_ = (blob: Blob) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target?.result) {
        setText(event.target.result as string);
      }
    };
    reader.readAsText(blob);
  };



  //const [saved, setSaved] = useState(false)

  function getIdPost() {
    const post = document.querySelector(".post");
    console.log("postid", post)
  }

  function likePost(e: any) {
    const lickedSvg = "<img className=\"icon__with__padding licked\" src=\"../images/like.png\" alt=\"\"/>"

    const unlickedSvg = "<img className=\"icon__with__padding unlike\" onClick={(e)=> {likePost(e)}} src=\"../images/unlike.png\" alt=\"\"/>"

    let currentLike = e.target
    console.log(typeof e.target)
    console.log("key", e.target.key)

    // currentLike.remove()

    let parentElement = e.target.parentElement

    let like = parentElement.
      querySelector('.unlike')

    let unlicked = parentElement.
      querySelector('.like')

    if (currentLike.className == 'unlike') {
      dispatch(posts_like(post_id));
      like.classList.add('display-none')
      unlicked.classList.remove('display-none')
    } else if (currentLike.className == 'like') {
      dispatch(posts_unlike(post_id));
      like.classList.remove('display-none')
      unlicked.classList.add('display-none')
    }


  }

  useEffect(() => {
    readBlob(blob_value);
    /*const blobUrl = URL.createObjectURL(blob_value);
    setLiveLink(blobUrl)*/
  }, [modal_post, blob_value]);


  {/*<Link to={`/sreamer/${createdby}/${post_id}`} */ }

  return (

    <Link to='' key={post_id} className={/*lastPost ? 'last_post' : */'post'}
    /*onClick={
 
      !modal_post.modal_state ? () => dispatch(set_content_modal({ modal_state: true, post: post }))
        :
        () => null
 
    }*/
    >
      <div className="user which__user__this__post">
        <div className='which__user__this__post__info'>
          <Link to={`/streamer/${createdby}`}>
            <img src={userminilogo} alt="" />
          </Link>
          <Link to={`/streamer/${createdby}`}>
            <p>{createdby}</p>
          </Link>
          <div className="point-separate-time-post">•</div>
          <div className="time-post"><p>{format(Date.parse(date), 'en_US')}</p></div>
        </div>


        <div className="icon__with__padding">
          <svg aria-label="Additionally" color="#fafafa" fill="#fafafa" height="24"
            role="img" viewBox="0 0 24 24" width="24">
            <circle cx="12" cy="12" r="1.5"></circle>
            <circle cx="6" cy="12" r="1.5"></circle>
            <circle cx="18" cy="12" r="1.5"></circle>
          </svg>
        </div>
      </div>
      <Link to='' key={post_id} className="posts__image" style={{
        backgroundImage: `url(${thumbnail})`,
        width: "100%",
        height: "100%",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
        onClick={

          !modal_post.modal_state ? () => dispatch(set_content_modal({ modal_state: true, post: post }))
            :
            () => null /*dispatch(close_modal()) */

        }
      >
        <div >

          {/* <video className="posts__image" src={url[0]}   /> */}
          {supported ? <HlsPlayer src={text_value} /> : "HLS is not supported in your browser"}
          {/*< App /> */}


        </div>
      </Link>
      <BottomOptions post={post} />

    </Link >
  )
}

export default function App() {

  const [blob_value, setBlob] = useState<Blob>(new Blob)
  const [text_value, setText] = useState<string>('');


  const _headers = {
    //'Referrer-Policy': 'strict-origin-when-cross-origin',
    //'method': 'GET',
    //"Authorization": "Basic " + btoa(":" + 'fd07e276-f93c-4980-961d-0b8a125a5f95'),
    'Accept': '*/*',
    'Accept-Encoding': 'identity;q=1, *;q=0',
    'Accept-Language': 'pt-BR,pt;q=0.9',
    'Cookie': 'pd_auth_key=fd07e276-f93c-4980-961d-0b8a125a5f95',
    //'If-Range': 'Mon, 01 Apr 2024 16:50:31 GMT',
    //'Range': 'bytes=720896-54099967',
    'Referer': 'https://pixeldrain.com/u/RB1U9ac8',
    'Sec-Ch-Ua': '"Not A(Brand";v="99", "Opera GX";v="107", "Chromium";v="121"',
    'Sec-Ch-Ua-Mobile': '?0',
    //'Sec-Ch-Ua-Platform': '"Android"',
    //'Sec-Fetch-Dest': 'video',
    'Sec-Fetch-Mode': 'cors',
    //'Sec-Fetch-Site': 'same-origin',
    'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Mobile Safari/537.36'
  }


  const readBlob_ = (blob: Blob) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target?.result) {
        setText(event.target.result as string);
      }
    };
    reader.readAsText(blob);
  };
  //FUNCIOANDO NO CORS ACTION   ==  RESTAURAR FUNÇÃO
  const fetcher = async () => {
    const response = await fetch('https://pixeldrain.com/api/file/RB1U9ac8'/*,{
      headers:_headers
    }*/);
    if (!response.ok) {
      throw new Error('Erro na solicitação!');
    }
    return response.text();
    /*if (response.ok) {
      return response;
    }*/
  };

  const { data, error, isLoading } = useSWR('https://pixeldrain.com/api/file/RB1U9ac8', fetcher)
  console.log("texto", data)





  const handleDownload = async () => {
    //const api_key = "adb3c19e-7fe0-4d12-a5f0-d15b8a194f72"




    //try {

    /* const response = await fetch('https://pixeldrain.com/api/file/F9KdESRr', {
       method: 'GET',
       headers: _headers
     }); // Substitua 'https://example.com/file.txt' pelo URL do seu arquivo*/
    //const data_ = await data; // Converte a resposta para texto
    const name_file = 'file.m3u8'
    if (data) {
      const resp_blob = new Blob([data], { type: 'application/x-mpegURL' }); // Cria um Blob a partir dos dados
      setBlob(resp_blob)
    }

    // Cria um link temporário para o Blob
    const url = window.URL.createObjectURL(blob_value);
    // Cria um elemento de link para iniciar o download
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('', name_file); // Define o nome do arquivo para download
    document.body.appendChild(link);
    console.log("texto", link)

    // Inicia o download
    link.click();

    // Remove o link temporário
    window.URL.revokeObjectURL(url);
    document.body.removeChild(link);
    /*} catch (error) {
      console.error('Erro ao baixar o arquivo:', error);
    }*/
  };

  const readBlob = (blob: Blob) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target?.result) {
        setText(event.target.result as string);
      }
    };
    reader.readAsText(blob);
  };

  useEffect(() => {
    readBlob(blob_value);
  }, [blob_value]);

  return (
    <div>
      <button onClick={handleDownload}>Baixar Arquivo</button>

      {text_value &&
        <textarea value={text_value} readOnly rows={10} cols={50} />}
    </div>
  );
}