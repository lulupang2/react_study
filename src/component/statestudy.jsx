import './state.css';
import { useState } from 'react';
import Modal from './modal';
export const Statestudy = () => {

    const [제목, set제목] = useState(['첫번째 배열', '두번째 배열']);
    const [state, setstate] = useState(['첫번째 배열', '두번째 배열']);
    const [버튼, set버튼] = useState(false);
    let date = new Date();
    let 오늘날짜 = date.toLocaleDateString();

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
        }
    }
        return (
            <div className="state">
                <div>
                             
                    <p className="글제목" onClick={모달창}>{제목[0]}</p>
                    <p className="날짜">{오늘날짜}</p>
                    <p className="내용">{state[0]}</p>
                </div><hr />

                <div>
                    <p className="글제목">{제목[1]}</p>
                    <p className="날짜">{오늘날짜}</p>
                    <p className="내용">{state}</p>
                </div><hr />
                {
                    버튼 === true
                        ? < Modal />
                        : null
                }

            </div>
        );
    }