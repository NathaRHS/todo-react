import { useEffect, useState } from "react";
function ImageChat() {

    const [image , setImage]  = useState("");
    const [change,setChange] = useState(false)
    function changeImage() {

            setChange(prev => !prev)
        
    }
      
        useEffect(()=>{
           fetch("https://api.thecatapi.com/v1/images/search?limit1&breed_ids=beng&api_key=live_FOFXISnVwC7nt7CQD5vxcy7UCG7cI4bu0hOMnZFh9KeR8DEPf2IXC6Vosqrk97IM")
           .then(res => res.json())
           .then(data => {
            setImage(data[0].url)   
            console.log(data[0].url)
           })
        },[change]
    )
    return (
        <>
            <img src={image} width="300" alt="imageDeChat" srcset="" />
            <button onClick={changeImage} className="button-change-chat">changer</button>
        </>
    )

}
export default ImageChat;