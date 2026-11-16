import React, { useState } from "react"

export default function App(){
    const [inputText, setInputText] = useState("")

    function handleText(e){
        setInputText(e.target.value)
    }

    return(
        <div>
            <header>Music</header>
            <form>
                <input onChange={handleText} type="text" />
                <button type="submit">Add</button>
            </form>
        </div>
    )
}