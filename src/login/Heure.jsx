import { useEffect, useState } from "react";
function Heure() {

    const [heure , setHeure]  = useState(0);

        function augmenterHeure() {
            setHeure(heure + 1000);
        }
        useEffect(()=>{
            setTimeout(() => {
                augmenterHeure();
            }, 1000);
        }
    )
    return (
        <>
        <p>{heure}</p>
        </>
    )

}
export default Heure;