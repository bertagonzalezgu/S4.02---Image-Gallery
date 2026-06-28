import closeIcon from "../assets/icons/close-svgrepo-com.svg"

type ImageProps = {
  id: number;       
  src: string;
  isFeatured: boolean;
  onDelete: (id: number) => void
};

export default function ImageItem({id, src, isFeatured, onDelete}: ImageProps){
    return(
        <li key={id} className={`relative ${isFeatured? "lg:col-span-2 lg:row-span-2": ""}`}>
            <img src={src} className="w-full h-full object-cover" alt="" />
            <button className="absolute top-2 right-2" 
                onClick={(e) => 
                {e.stopPropagation();
                onDelete(id);}
                }><img className="w-7 h-7 bg-white bg-opacity-50 rounded-full" src={closeIcon} alt="Cruz" aria-label="Eliminar"/>
            </button>
        </li>
    );
};