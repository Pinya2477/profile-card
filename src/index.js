import React from 'react';
import ReactDOM from 'react-dom/client';
import "./styles.css";


function toThaiDateString(date) {
  let monthNames = [
    "มกราคม",
    "กุมภาพันธ์",
    "มีนาคม",
    "เมษายน",
    "พฤษภาคม",
    "มิถุนายน",
    "กรกฎาคม",
    "สิงหาคม.",
    "กันยายน",
    "ตุลาคม",
    "พฤศจิกายน",
    "ธันวาคม",
  ];

  let year = date.getFullYear() + 543;
  let month = monthNames[date.getMonth()];
  let numOfDay = date.getDate();

  let hour = date.getHours().toString().padStart(2, "0");
  let minutes = date.getMinutes().toString().padStart(2, "0");
  let second = date.getSeconds().toString().padStart(2, "0");

  return `${numOfDay} ${month} ${year} ` + `${hour}:${minutes}:${second} น.`;
}

let date1 = new Date();
console.log(toThaiDateString(date1));


function MyDateTime(){
  let date1 = new Date();
  date1 = toThaiDateString(date1);
  return <div>{date1}</div>;
}

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="Unity" emoji="😁 " color="cyan" />
      <Skill skill="PHP" emoji="😃" color="orange" />
      <Skill skill="React" emoji="😅" color="yellow" />
      <Skill skill="photoshop" emoji="😊" color="orangered" />
      <Skill skill="Mysql" emoji="😂" color="Pink" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}



function Intro(){
  return(
    <div>
      <h1>ภิญญา  สุขวิพัฒน์</h1>

      <p>
        นักศึกษาสาขาวิชาเทคโนโลยีสารสนเทศและนวัตกรรมดิจิทัล คณะวิทยาศาสตร์  มหาวิทยาลัยอุบลราชธานี
        ชื่อชอบการเล่นกีฬา เทคโนโลยีสมัยใหม่ ...
      </p>


    </div>
  )
}

function Avatar(){
  return <img className="avatar" src="Pinya.jpg" alt="Pinya Sukwiphat"></img>
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

