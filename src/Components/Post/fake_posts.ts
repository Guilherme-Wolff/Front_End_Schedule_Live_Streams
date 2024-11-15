import { Post } from "../../types/types"

import thumb from "./thumbnail.png"


let video_url = 'https://pixeldrain.com/api/file/aCwH5Ypa';

export const fake_posts:Post[] = [
    {
        "post_id": 1,
        "date": "05 Mar 2024",
        "userminilogo": "../avatar.jpg",
        "createdby": "user1",
        "thumbnail":thumb,
        "url": [
          'https://pd.cybar.xyz/rAdnR1s8?download',
          //'https://pd.cybar.xyz/g9HvQHuT'
          //'./playlist-LvOgECYO.m3u8'
          //'https://i-kebab.bunkr.ru/playlist-LvOgECYO.m3u8'
        ],
        "likes": 20,
        "comments": [
          {
            "comment_id": 1,
            "userminilogo": "avatar",
            "username": "user1",
            "comment": "comment1"
          },
          {
            "comment_id": 2,
            "userminilogo": "avatar",
            "username": "user2",
            "comment": "comment2"
          },
          {
            "comment_id": 3,
            "userminilogo": "avatar",
            "username": "user3",
            "comment": "comment3"
          }
        ],
        "bio": "bio1"
      },
      {
        "post_id": 2,
        "date": "09 Aug 2022",
        "userminilogo": "../avatar.jpg",
        "createdby": "user2",
        "thumbnail":thumb,
        "url": [
          "https://pd.cybar.xyz/rAdnR1s8?download"
          //'./playlist-LvOgECYO.m3u8'
          //'https://i-kebab.bunkr.ru/playlist-LvOgECYO.m3u8'
        ],
        "likes": 20,
        "comments": [
          {
            "comment_id": 1,
            "userminilogo": "avatar",
            "username": "user1",
            "comment": "comment1"
          },
          {
            "comment_id": 2,
            "userminilogo": "avatar",
            "username": "user2",
            "comment": "comment2"
          },
          {
            "comment_id": 3,
            "userminilogo": "avatar",
            "username": "user3",
            "comment": "comment3"
          }
        ],
        "bio": "bio1"
      },
      {
        "post_id": 3,
        "date": "09 Aug 2022",
        "userminilogo": "../avatar.jpg",
        "createdby": "user3",
        "thumbnail":thumb,
        "url": [
          video_url
        ],
        "likes": 20,
        "comments": [
          {
            "comment_id": 1,
            "userminilogo": "avatar",
            "username": "user1",
            "comment": "comment1"
          },
          {
            "comment_id": 2,
            "userminilogo": "avatar",
            "username": "user2",
            "comment": "comment2"
          },
          {
            "comment_id": 3,
            "userminilogo": "avatar",
            "username": "user3",
            "comment": "comment3"
          }
        ],
        "bio": "bio1"
      },
      {
        "post_id": 4,
        "date": "09 Aug 2022",
        "userminilogo": "../avatar.jpg",
        "createdby": "user4",
        "thumbnail":thumb,
        "url": [
          video_url
        ],
        "likes": 20,
        "comments": [
          {
            "comment_id": 1,
            "userminilogo": "avatar",
            "username": "user1",
            "comment": "comment1"
          },
          {
            "comment_id": 2,
            "userminilogo": "avatar",
            "username": "user2",
            "comment": "comment2"
          },
          {
            "comment_id": 3,
            "userminilogo": "avatar",
            "username": "user3",
            "comment": "comment3"
          }
        ],
        "bio": "bio1"
      },
      {
        "post_id": 5,
        "date": "09 Aug 2022",
        "userminilogo": "../avatar.jpg",
        "createdby": "user4",
        "thumbnail":thumb,
        "url": [
          video_url
        ],
        "likes": 20,
        "comments": [
          {
            "comment_id": 1,
            "userminilogo": "avatar",
            "username": "user1",
            "comment": "comment1"
          },
          {
            "comment_id": 2,
            "userminilogo": "avatar",
            "username": "user2",
            "comment": "comment2"
          },
          {
            "comment_id": 3,
            "userminilogo": "avatar",
            "username": "user3",
            "comment": "comment3"
          }
        ],
        "bio": "bio1"
      },
]

/*
export let fake_posts:Post[] = [
    {
        "post_id": 1,
        "date": "09 Aug 2022",
        "userminilogo": "../avatar.jpg",
        "createdby": "user1",
        "url": [
          "../post.jpg"
        ],
        "likes": 20,
        "comments": [
          {
            "comment_id": 1,
            "userminilogo": "avatar",
            "username": "user1",
            "comment": "comment1"
          },
          {
            "comment_id": 2,
            "userminilogo": "avatar",
            "username": "user2",
            "comment": "comment2"
          },
          {
            "comment_id": 3,
            "userminilogo": "avatar",
            "username": "user3",
            "comment": "comment3"
          }
        ],
        "bio": "bio1"
      },
      {
        "post_id": 2,
        "date": "09 Oct 2022",
        "userminilogo": "../avatar.jpg",
        "createdby": "user2",
        "url": [
          "../post2.jpg"
        ],
        "likes": 8,
        "comments": [
          {
            "comment_id": 1,
            "userminilogo": "avatar",
            "username": "user1",
            "comment": "comment1"
          },
          {
            "comment_id": 2,
            "userminilogo": "avatar",
            "username": "user2",
            "comment": "comment2"
          },
          {
            "comment_id": 3,
            "userminilogo": "avatar",
            "username": "user3",
            "comment": "comment3"
          }
        ],
        "bio": "bio2"
      }
]
 */