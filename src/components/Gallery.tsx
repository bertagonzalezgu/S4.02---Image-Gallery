import ImageItem from "./ImageItem";
import { images } from "../data/images";

export default function Gallery(){
    const listItems = images.map((image, index) =>
    <ImageItem key={image.id} id={image.id} src={image.src} isFeatured={index === 0}/>)
    return <ul>{listItems}</ul>  
};