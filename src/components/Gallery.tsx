import ImageItem from "./ImageItem";
import { images } from "../data/images";
import { useState } from "react";
import {DragDropProvider} from '@dnd-kit/react';

export default function Gallery(){
    const [totalImages, setTotalImages] = useState(images)
    const listItems = totalImages.map((image, i) =>
    <ImageItem key={image.id} id={image.id} src={image.src} isFeatured={i === 0} onDelete={handleClick} index={i}/>)

    function handleClick(id: number){

    const confirm = window.confirm('Are you sure you want to delete the image?')

        if(confirm === true){
                setTotalImages(totalImages.filter((image) => image.id !== id));
        }
    }

    return  (
    <DragDropProvider>
        <main className="list-none bg-yellow-100 px-5 py-5 flex justify-center">
            <div className="flex-col">
                <h1 className="font-sans text-xl font-bold text-center p-5">Image Gallery</h1>
                <ul className="grid grid-cols-2 gap-5 md:grid-cols-4 lg:grid-cols-5">{listItems}</ul> 
            </div>
            
        </main>
    </DragDropProvider>
    )
};