import ImageItem from "./ImageItem";

const images = [{
    id: 1,
    src: "../assets/img/img_1.webp"
}, {
    id: 2,
    src: "../assets/img/img_2.webp"
}, {
    id: 3,
    src: "../assets/img/img_3.webp"
}, {
    id: 4,
    src: "../assets/img/img_4.webp"
}, {
    id: 5,
    src: "../assets/img/img_5.webp"
}, {
    id: 6,
    src: "../assets/img/img_6.webp"
}];

export default function Gallery(){
    const listItems = images.map(image =>
    <ImageItem key={image.id} id={image.id} src={image.src}/>
    );
    return <ul>{listItems}</ul>
};