import ImageItem from "./ImageItem";
import { images } from "../data/images";
import { useState } from "react";

export default function Gallery(){
    const [totalImages, setTotalImages] = useState(images)
    const listItems = totalImages.map((image, index) =>
    <ImageItem key={image.id} id={image.id} src={image.src} isFeatured={index === 0}/>)

    function handleClick(id: number){
    setTotalImages(totalImages.filter((image) => image.id !== id));
    }

    return  <main className="list-none bg-yellow-100 px-5 py-5 flex justify-center">
                <ul className="grid grid-cols-2 gap-5 md:grid-cols-4 lg:grid-cols-5">{listItems}</ul> 
            </main>
};