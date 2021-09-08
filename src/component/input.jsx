import React,{useState} from 'react'

export const Input = () => {
    const [인풋, set인풋] = useState('');
    return (
        <div>
            {인풋}
            <input onChange={(e) => {
                set인풋(e.target.value);
            }} />

        </div>
    )
}