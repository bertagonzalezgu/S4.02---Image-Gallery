type ImageProps = {
  id: number;       
  src: string;
  isFeatured: boolean;
};

export default function ImageItem({id, src, isFeatured}: ImageProps){
    return(
        <li key={id} className={isFeatured? "lg:col-span-2 lg:row-span-2": ""}>
            <img src={src} className="w-full h-full object-cover" alt="" />
        </li>
    );
};