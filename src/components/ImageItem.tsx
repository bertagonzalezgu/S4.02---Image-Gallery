type ImageProps = {
  id: number;       
  src: string;
};

export default function ImageItem({id, src}: ImageProps){
    return(
        <li key={id}>
            <img src={src} alt="" />
        </li>
    );
};