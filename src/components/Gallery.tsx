import ImageItem from "./ImageItem";
import { images } from "../data/images";

export default function Gallery(){
    const listItems = images.map((image, index) =>
    <ImageItem key={image.id} id={image.id} src={image.src} isFeatured={index === 0}/>)
    return  <main className="list-none bg-yellow-100 px-5 py-5 flex justify-center">
                <ul className="grid grid-cols-2 gap-5 md:grid-cols-4 lg:grid-cols-5">{listItems}</ul> 
            </main>
};