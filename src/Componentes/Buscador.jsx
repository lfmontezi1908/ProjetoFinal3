import React, { useEffect, useState } from "react";
 import axios from "axios";
export default function Buscador(){
    const [busca, setBusca]=useState('')
    const [nome,setNome]= useState('')
    const [id, setId]= useState('')
    const [img,setImg]=useState('')
    const [tipo,setTipo]=useState('')
    const [ok,setOk]=useState(1)
    console.log(nome)
    function Buscar(){
   setOk(!ok)
    
    }
useEffect(()=>{
    const resultado=async()=>{
        try{
            const response=await
            axios.get(`https://pokeapi.co/api/v2/pokemon/${busca}`)
            setNome(response.data.name)
            setId(response.data.id)
            setImg(response.data.sprites.front_default)
            setTipo(response.data.types[0].name)
        }
        catch(error){
            console.log(error)
        }
    }
    resultado()
}),[ok]
    return(
        <>
        <input type="text" name="Poke" id="Poke" onChange={e=>setBusca(e.target.value)}/>
        <button onClick={e=>Buscar()}>Buscar</button>
        <h3>{id}</h3>
        <p>{tipo}</p>
        <h2>{nome}</h2>
        <img src={img} alt="" />
        </>
    )
}