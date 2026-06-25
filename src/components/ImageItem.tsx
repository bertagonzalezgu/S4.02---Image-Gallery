type ImageProps = {
  id: number;       
  src: string;
  isFeatured: boolean;
};

export default function ImageItem({id, src, isFeatured}: ImageProps){
    return(
        <li key={id} className={isFeatured? "featured": ""}>
            <img src={src} alt="" />
        </li>
    );
};