//import Image from "next/image";
import "./Story.scss"
import avatar from "./avatar.jpg";
import {PropsUserStory} from "../../types/types"


export default function StoryIcon({ storie_id,hasStory ,name,user_image }: PropsUserStory) {
  return (
    <li key={storie_id} className="story-icon-li">
      <a href={"/"+name}>
      <div className="back-storie">
        <img
          //src={avatar}
          src={user_image}
          //src={"/avatar.jpg"}
          alt="user avatar"
          //width={60}
          className={`story-icon-img ${hasStory && "hasStory"}`}
        ></img>
      </div>
      <span className="story-icon-span"><p className="stories-name">{name}</p></span>
      </a>
    </li>
  );
}
