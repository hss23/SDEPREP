import React, { useState, useEffect, useContext } from 'react'
import { AiOutlineLeft, AiOutlineRight, AiOutlineArrowRight } from 'react-icons/all'
import { IconContext } from "react-icons"
import SolutionModal from '../../Components/SolutionModal/SolutionModal';
import { useAuth } from '../../Services/firebase';
import { doc, getDoc, setDoc } from "firebase/firestore";
import Navbar from '../../Components/Navbar/Navbar';
let done = [];
let dayArray = [];
const QuesList = ({ topic }) => {
  const [player, setPlayer] = useState(false);
  const [url, seturl] = useState("https://www.youtube.com/watch?v=hVl2b3bLzBw&list=PLgUwDviBIf0rPG3Ictpu74YWBQ1CaBkm2&index=5")
  const playSolution = (ulr) => {
    seturl(ulr);
    setPlayer(true);
  }
  const [question, setQuestion] = useState([]);
  const [showQuestion, setshowQuestion] = useState(false);
  const { currentUser, db } = useAuth();
  const [dayIndex, setdayIndex] = useState(null);
  const [dayDone, setdayDone] = useState([]);
  const [list, setlist] = useState([]);
  useEffect(() => {
    getalldata();
    getuserdata();
  }, []);
  async function getalldata() {
    const docRef = doc(db, "DataStructure", "4ba87400-1003-11ec-a33f-edc12adaaf8d");
    const snapshot = await getDoc(docRef);
    let data = snapshot.data()["question"];
    var result = Object.keys(data).map((key) => [data[key]]);
    setQuestion(result.sort());
    setlist(result[0][0]);
  }
  //questionlist
  const questionset = (data, index) => {
    setlist([]);
    setshowQuestion(true);
    setlist(data);
    setdayIndex(index);
    console.log(list)
  };
  // userques
  const [checked, setChecked] = React.useState([0]);
  //to get list by user
  async function getuserdata() {
    const docRef = await doc(db, "questiondone", `${currentUser?.uid}`);
    const snapshot = await getDoc(docRef);
    done = snapshot.data() ? snapshot.data()["questionid"] : [];
  }
  const handleToggle = (id) => {
    if (done.includes(id)) {
      done = done.filter(function (item) {
        return item !== id;
      });
      console.log("error");
    } else {
      done.push(id);
      console.log("done")
    }
    addtoDB(done);
  };

  // add data to db
  const addtoDB = (done) => {
    const docRef = doc(db, "questiondone", `${currentUser.uid}`);
    const donequestion = setDoc(docRef,
      {
        questionid: done,
      },
      { merge: true }
    )
      .then(function () {
        console.log("written ");
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });
  };

  const scrollLeft =()=>{
    document.getElementsByClassName("days").scrollLeft="80px";
  }

  return (
    <IconContext.Provider value={{}}>
      <Navbar />
      <div className="container w-screen h-full bg-gray-300 flex flex-col items-center py-12 px-28">
        {player ? <SolutionModal player={player} setPlayer={setPlayer} url={url} /> : ""}
        <div className="flex w-full justify-start">
          <div className="flex w-full justify-start items-center py-12">
            <AiOutlineLeft className="rounded-l-full mb-5" onClick={scrollLeft}/>
            <div className="days flex overflow-scroll w-5/6">
              {question?.map((data, index) => {
                return (
                  <div className="flex flex-col text-center px-2">
                    <div className="p-12 bg-white border-2 rounded-md cursor-pointer" onClick={() => questionset(data[0], index)} >
                      <h1>Day {index + 1}</h1>
                    </div>
                    <h2>{data[0][0].substring(2)}</h2>
                  </div>
                )
              })}
            </div>
            <AiOutlineRight className="rounded-r-full mb-5" />
          </div>
        </div>
        <div className="queslist w-full bg-white flex flex-col justify-center self-center p-8">
          <h1 className="p-2">{list[0]?.substring(2)}</h1>
          <div className="questions flex  w-full font-bold border-b-2 p-2">
            <p className="flex-1">Questions</p>
            <p className="flex-1 text-center">Solved</p>
            <p className="flex-1 text-right">Solution</p>
          </div>
          {list.slice(1).map((data, index) => {
            return (
              <div key={data.id} className="questions flex justify-between align-middle items-center border-b-2 p-2">
                <a className="flex-1" href={data?.questionurl} target="_blank" rel="noopener noreferrer">{data?.name}<AiOutlineArrowRight className="inline" /></a>
                <input className="flex-1 text-center" type="checkbox" onClick={() => handleToggle(data?.id)} checked={done.includes(data?.id) ? true : false} />
                <button type="button" className="flex-1 text-right" onClick={() => playSolution(data?.yturl)} disabled={!data.yturl}>Solution</button>
              </div>)
          })}
        </div>
      </div>
    </IconContext.Provider>
  )
}

export default QuesList
