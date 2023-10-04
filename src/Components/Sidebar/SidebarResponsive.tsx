
import SmallSidebar from "./SmallSidebar"
import Sidebar from "./Sidebar"

export function SidebarResponsive() {
  const innerWidth = window.innerWidth;
  console.log("LARG: ", innerWidth)


  if (innerWidth > 1264) {
    return <Sidebar />;
  }
  if (innerWidth > 899) {
    return <SmallSidebar />;
  }
  /*if(innerWidth > 768){
    return <SmallSidebar />;
  }*/
  
}

export default SidebarResponsive;