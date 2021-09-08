import './state.css';
import { useState } from 'react';
import Modal from './modal';
export const Statestudy = () => {
    const [제목, set제목] = useState(['첫번째 제목 배열', '두번째 제목 배열']);
    const [state, setstate] = useState(['첫번째 내용 배열', '두번째 내용 배열']);
    const [버튼, set버튼] = useState(false);
    const [모달번호, set모달번호] = useState(0);
    let date = new Date();
    let 오늘날짜 = date.toLocaleDateString();
    let i = 0;
    let [글, set글] = useState("");


    function 제목변경() {
        var newArray = [...제목] //... 펼침 연산자(Spread Operator) 특정 개체 또는 배열의 값을 다른 객체,배열로 복제할때 사용
        newArray[0] = '변경된 제목';
        set제목(newArray);
    }
    function 모달창() {
        if (버튼) {
            set버튼(false); //state 데이터 변경은 setstate함수 이용
        } else {
            set버튼(true);
            set모달번호(1);
            console.log(모달번호);
        }
    }
//리턴
        return ( 
            <div className="state" key={i}>
                {버튼 === true ? < Modal 제목={제목} state={state}/> : null }
                {
                    제목.map(function (a,i) {                    
                        return (
                            
                    <div>
                    <p className="글제목" onClick={모달창}> {a} </p>
                    <p className="날짜">오늘날짜 : {오늘날짜}</p>
                    <p className="내용">{state[i]}</p> 
                    <hr />
                    </div> 
                            );                        
                    })
                }
                <div className="글쓰기랩">
                    <input type="text" className="글쓰기" onChange={(e) => {
                        set글(e.target.value);
                    } }/>
                    <button onClick={() => {
                        var 제목복사 = [...제목];
                        제목복사.unshift(글); //unshift -> 배열 맨 앞 자리 추가
                        set제목(제목복사);
                        setstate(제목복사);
                    }
                    }>글쓰기</button>
                </div>
            </div >
        )
    }