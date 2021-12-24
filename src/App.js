/* eslint-disable */

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 맛집 탐방','피아노 명곡 순위']);

  let [따봉, 따봉변경] = useState(0);
  let [modal, modal변경] = useState(false);

  function 제목바꾸기(){
    var newArray = [...글제목];
    newArray[0] = '여자코트 추천';
    글제목변경( newArray );
  }
  function 가나다순정렬(){
    let 가나다가나다 = [...글제목];
    가나다가나다.sort();
    글제목변경(가나다가나다);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <div className="list">
        <h3> { 글제목[0] } <span onClick={ ()=>{ 따봉변경(따봉+1) } }>😍</span>{따봉}</h3>
        <p>2월 17일 발행</p>
        <button className='coatBtn' onClick={ 제목바꾸기 }>버튼</button>
        <hr/>
      </div>
      <div className="list">
        <h3> { 글제목[1] } <span onClick={ ()=>{ 따봉변경(따봉+1) } }>😍</span>{따봉}</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3 onClick={ ()=>{ modal변경(!modal) } }> { 글제목[2] } <span onClick={ ()=>{ 따봉변경(따봉+1) } }>😍</span>{따봉}</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>

      {
        modal === true
        ? <Modal className="modal"></Modal>
        : null
      }

      <button onClick={가나다순정렬}>가나다순정렬</button>
    </div>
  );
}
function Modal(){
  return (
    <div className='modal'>
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
