import './App.css';
import User from './Components/User';

var userData=[
  {
    name:"Nowsath",
    city:"Dindigul",
    job:"Front-End Developer",
    skills:["UI / UX " , "Front-End Developer" , "HTML" , "CSS" , "JavaScript" , "React JS" , "Bootstap"],
    online:true,
    profile:"image/img-1.jpg"
  },
  {
    name:"Harish",
    city:"Dindigul",
    job:"Full Stack Developer",
    skills:["Java" , "Database" , "HTML" , "CSS" , "JavaScript" , "React JS" , "Bootstap"],
    online:false,
    profile:"image/img-2.jpg"
  },
  {
    name:"Aqib",
    city:"Chennai",
    job:"Junior Developer",
    skills:["Python" , "Database" , "HTML" , "CSS" , "JavaScript" , "React JS" , "Bootstap"],
    online:true,
    profile:"image/img-3.jpg"
  },
  {
    name:"Haffez",
    city:"Chennai",
    job:"Full Stack Developer",
    skills:["DotNet" , "Database" , "HTML" , "CSS" , "JavaScript" , "React JS" , "Bootstap"],
    online:false,
    profile:"image/img-1.jpg"
  },
  {
    name:"Shira",
    city:"Dindigul",
    job:"Full Stack Developer",
    skills:["UI / UX" , "Database" , "HTML" , "CSS" , "JavaScript" , "React JS" , "Bootstap"],
    online:true,
    profile:"image/img-2.jpg"
  },
  {
    name:"Sheik",
    city:"Chennai",
    job:"Full Stack Developer",
    skills:["Java" , "Database" , "HTML" , "CSS" , "JavaScript" , "React JS" , "Bootstap"],
    online:false,
    profile:"image/img-3.jpg"
  },
  {
    name:"Hajara",
    city:"Chennai",
    job:"Full Stack Developer",
    skills:["Java" , "Database" , "HTML" , "CSS" , "JavaScript" , "React JS" , "Bootstap"],
    online:true,
    profile:"image/img-2.jpg"
  },
   {
    name:"James",
    city:"Chennai",
    job:"Front End Developer",
    skills:["UI  / UX" , "Database" , "HTML" , "CSS" , "JavaScript" , "React JS" , "Bootstap"],
    online:true,
    profile:"image/img-3.jpg"
  }

]



function App() {
  return<>
  {
    userData.map((users,index)=>(
      <User  key={index} name={users.name} city={users.city} job={users.job} online={users.online} profile={users.profile}
       skills={users.skills} />
    ))
  }
  </>;
  
}

export default App;

{/* <User name="Nowsath"  city="Chennai" job="Front-End Developer"
skills={["UI / UX" , " Front-End Developer" , "HTML" , "CSS" , "JavaScript" ,
 "React JS" , " Bootstrap"]} 
 online={true} profile="image/img-1.jpg"
/> */}
