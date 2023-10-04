//'use client'
import "./Story.scss"
import { useRef, useState } from "react";
import StoryIcon from "./StoryIcon";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import data from "./data.json"
import {PropsUserStory} from "../../types/types"

class ConstructPropsUserStory implements PropsUserStory {
  public storie_id = 0;
  public user_image = '';
  public name = '';
  public hasStory = true;

  constructor(storie_id : number ,name: string,hasStory: boolean,user_image:string) {
    this.storie_id = storie_id;
    this.user_image = user_image;
    this.name = name;
    this.hasStory = hasStory;
  }
}


let arr:Array<PropsUserStory> = [];

data.map((data) => {
  console.log(data)

  arr.push(new ConstructPropsUserStory(data.storie_id,data.name,data.hasStory,data.user_image))
})


export default function Story() {
 // const [story, setStory] = useState<boolean | null>(true);
  const [button_hidden_max, setButton_hidden_max] = useState<boolean | null>(false);
  const [isMoved, setIsMoved] = useState(false);
  const rowRef = useRef<HTMLUListElement>(null);


  const handleClick = (direction: string) => {
    setIsMoved(true);

    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
          console.log("SCROLL",scrollLeft,":",clientWidth)
          
      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };
  return (
    <div className="div-stories-main">
      <MdKeyboardArrowLeft
        onClick={() => handleClick("left")}
        className={`storie-button-left ${
          !isMoved && "storie-button-left-hidden"
        }`}
      />
      <ul 
        ref={rowRef}
        className="carousel-list"
      >
        {arr.map(props =>(
          <StoryIcon key={props.storie_id} storie_id={props.storie_id} hasStory={props.hasStory} name={props.name} user_image={props.user_image}/>
        ))}
        
      </ul>
      <MdKeyboardArrowRight
        onClick={() => handleClick("right")}
        className={`storie-button-right ${
          button_hidden_max && "storie-button-right-hidden"
        }`}
      />
    </div>
  );
}
