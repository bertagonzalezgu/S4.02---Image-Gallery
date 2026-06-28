type ImageProps = {
  id: number;       
  src: string;
  isFeatured: boolean;
  onDelete: (id: number) => void
};

export default function ImageItem({id, src, isFeatured, onDelete}: ImageProps){
    return(
        <li key={id} className={isFeatured? "lg:col-span-2 lg:row-span-2": ""}>
            <img src={src} className="w-full h-full object-cover" alt="" />
            <button onClick={(e) => 
                {e.stopPropagation();
                onDelete(id);}
                }>X
            </button>
        </li>
    );
};