"use client"
import React, { useState,useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Characters() {

    const [characters, setCharacters] = useState([])
    const [loading, setLoading] = useState(false)  
    console.log("Data: ", characters)
    useEffect(() => {
      setLoading(true)
      const fetchCharacters = async () => {
        try {
            const response = await fetch('https://dragonball-api.com/api/characters')
            const dgb = await response.json()
            // console.log(dgb)
            setCharacters(dgb.items) 
        } catch (error) {
          console.log(error)
            
        }
        setLoading(false)
      }
      fetchCharacters()
    }, [])  
  return (
    <div className='container mx-auto text-center mt-5'> 
    {loading ? (
        <p>Loading...</p>
    ):(
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        {characters.map((character) => (
            <Link key={character.id} href={`/characters/[id]`} as={`/characters/${character.id}`}>
                <div className='flex justify-center items-center flex-col p-3 rounded-md'>
                    <h3 className='text-xl font-bold bg-amber-500 text-white py-2 px-3 rounded-md my-2'>{character.name}</h3>
                    <Image src={character.image} width={200} height={200} alt={character.name} className='rounded-md'/>
                </div>
            </Link>
        ))}
        </div>
    )}

    </div>
  )
}

export default Characters
