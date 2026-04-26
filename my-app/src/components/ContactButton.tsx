
"use client"

 export default function ContactButton(){
    
     const email = "tahirazizkhan03@gmail.com";
     return (
        <a
            href={`mailto:${email}`}
            className="text-xl text-gray-800 bg-green-600 w-fit p-4 rounded-lg hover:bg-green-700r"
            >
                Contact me!
            </a>
     )
 }