import Image from "next/image";
import Square from "./square";


export default function Board() {
  return <>
  <div className="buttonRow">
    <Square value = '1' />
    <Square value = '2' />
    <Square value = '3' />
  </div>
  
  <div className="buttonRow">
    <Square />
    <Square />
    <Square />
  </div>

  <div className="buttonRow">
    <Square />
    <Square />
    <Square />
  </div>

  </>;
}