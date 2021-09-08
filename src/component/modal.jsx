import React from 'react'
import './state.css';
const Modal = (props) => {
    return (
        <div className="모달">
            <p className="모달_제목">{props.제목}</p>
            <p className="모달_날짜">{props.오늘날짜}</p>
            <p className="모달_내용">{props.state}</p>
            </div>

    )
}

export default Modal
