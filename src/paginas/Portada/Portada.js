import React from "react";
import './portada.css';
import { useState } from "react";
import { useEffect } from "react";

export default function Portada(){
    let [counter, setCounter] = useState(0)
    let [id, setId] = useState(0)
  
    const imagenesPortada = 
    [
      "https://scontent.faep22-1.fna.fbcdn.net/v/t39.30808-6/320931035_1283879332223969_4080474640229492333_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeFkP9NF9M5xXn9LZv33QEQxAX7d5xeFPecBft3nF4U95wdxS0t3_ifzXzhZw9DBBmk&_nc_ohc=ARYYWqCVSiAAX-l7smU&_nc_ht=scontent.faep22-1.fna&oh=00_AfCUPLp-4rk2wS_zVSlYytD5N4a0FQhCjaNasdyProtO3Q&oe=63BEFDC7",
      "https://scontent.faep22-1.fna.fbcdn.net/v/t39.30808-6/321075988_568722628409508_4939050608131751830_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeH4a5qf73Pcz-l3ZiKlAKzzNqeoEg_iiio2p6gSD-KKKtu-k1OFfDXWBN956okevoQ&_nc_ohc=4bffc6F5F_AAX_vkQl_&_nc_ht=scontent.faep22-1.fna&oh=00_AfC8dbACjik3FB0za44OW0ZTx7p1dxVMDV46ul0pPW-rhg&oe=63BF1624",
      "https://scontent.faep22-1.fna.fbcdn.net/v/t39.30808-6/322332625_690625235835385_1649073452091464008_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeGE-k2CGv36GSImNiJmC3YzIOO4oiU9lBIg47iiJT2UEq0sW1xBj7GxZ8k5E36e6TI&_nc_ohc=sMu9xP4qJzUAX9bADDc&_nc_ht=scontent.faep22-1.fna&oh=00_AfCBjW4KL91WQH6vTeIpU0U9Etx0efo39lunVP02eXa6qA&oe=63BF28E3",
      "https://scontent.faep22-1.fna.fbcdn.net/v/t39.30808-6/321280260_851547749400950_7107949149904919076_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeEpbp21Spn58KPf5b9jLyCHC0R8JnUmMoULRHwmdSYyhY5B5fQE30APD59K-uoJh1w&_nc_ohc=Y43eqS4ctQcAX_ioqm2&_nc_ht=scontent.faep22-1.fna&oh=00_AfDvPH4JGy8eodcYzGMO7iKOnwK0x3uA9pPs8LT2gIPgKw&oe=63BE6918",
      "https://scontent.faep22-1.fna.fbcdn.net/v/t39.30808-6/318517080_674148414410577_6917411628632883542_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeF3hJ9SNE7JIad0rAj-pOGhUHhWeUiYE59QeFZ5SJgTn08VVLymF__8850iVc_eAY4&_nc_ohc=-9pOumuz_04AX-7b1n3&_nc_ht=scontent.faep22-1.fna&oh=00_AfBU6giAkLLjJvxVu0uXxfqHsHTslA7KF8LmELS245fT6A&oe=63BF6772",
      "https://scontent.faep22-1.fna.fbcdn.net/v/t39.30808-6/317446763_668691324956286_4839270949595412578_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeGIxm03B93vjmdAXZiSBkaflGjC2wke-j6UaMLbCR76PtPzbQUyt1j6Zx_fxI6u7R8&_nc_ohc=4jvLSMs2vRoAX_NJZU3&_nc_ht=scontent.faep22-1.fna&oh=00_AfBGRKCB4L7jJa0MclSCGdfXOYwhDwm5Mq4IiMCtWFO9wQ&oe=63BFC6C0",
      "https://scontent.faep22-1.fna.fbcdn.net/v/t39.30808-6/317483149_668697774955641_4199450913105239965_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeFVM00rXiYglCFli-cDnGtiw2z0HysB6nzDbPQfKwHqfMmfRQrqRNUv4rouJqRGyiE&_nc_ohc=qHTzvUoeAFkAX8cJvSJ&_nc_ht=scontent.faep22-1.fna&oh=00_AfBRwXRqrIE8Mata2-vBBOuXJQuqohapIU0su13y_WT0Kw&oe=63BE51BE",
      "https://scontent.faep22-1.fna.fbcdn.net/v/t39.30808-6/317487618_668688754956543_6536450919065356937_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeHYcfMaGLEsmcaGIJObHfwGyhsxHXfzk3TKGzEdd_OTdDjLc2ZeGg6PO7g1FeHnxyU&_nc_ohc=KxKpgDf59R8AX8iLVxs&_nc_ht=scontent.faep22-1.fna&oh=00_AfDmWfVP_-cNb_l0C_o8c_kI0Ss--IpZUrUitJe2ymaxNw&oe=63BF6557",
      "https://scontent.faep22-1.fna.fbcdn.net/v/t39.30808-6/316669867_663958192096266_701666187117092186_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeHn39YiYibVipVdqH4Zzq1HMYnQ5_wNz7ExidDn_A3PsTDXG9NHCW0mMxm0avlShrs&_nc_ohc=i9oQbbTOu-8AX-3LS-z&_nc_ht=scontent.faep22-1.fna&oh=00_AfB3OyNMeo2BOA4YF7F25IZljX5aFOMkw0BWq8mk970KVQ&oe=63BFADC5"
    ]
  
    useEffect(()=>{
      let idInterval = setInterval(()=>{
        setCounter(counter + 1)
        if(counter === imagenesPortada.length - 1){
          setCounter(0)
        }
    },5000)
      setId(idInterval)
      return clearInterval(id)
    },[counter])
   
  
    return (
      <div className="contenedorPortada">
 
          <img className="imgsPortada" src={imagenesPortada[counter]} alt="" />

        <div className="subscribe">
      <a href="#" className="btn-3d-can">Información sobre torneos</a>
      <a href="#" className="btn-3d-can">Visitá la página web</a>
      <a href="#" className="btn-3d-can">Canal de Youtube</a>
     </div>
      </div>
    );
    
}