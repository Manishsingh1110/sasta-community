import { useState } from 'react'
import notecontext from './Notecontext'
const Notestate = (props) => {
    var authtoken=localStorage.getItem("token")
    const noteinitial = []
    const [Note, setNote] = useState(noteinitial)
    const [Allnote, setAllnote] = useState(noteinitial)
    const [Pdffile, setPdffile] = useState(noteinitial)
    const [Noteuser, setNoteuser] = useState(noteinitial)
    const remainderinitial = []
    const [Remaind, setRemainder] = useState(remainderinitial)
    const questionallinitial = []
    const [Questionall, setQuestionall] = useState(questionallinitial)
    const answerallinitial = []
    const [Answerall, setanswerall] = useState(answerallinitial)
    const questioninitial = []
    const [Question, setQuestion] = useState(questioninitial)
    const answerinitial = []
    const [Answer, setanswer] = useState(answerinitial)
    const [Questionuser, setQuestionuser] = useState(questioninitial)
    // const [Answeruser, setansweruser] = useState(answerinitial)
    var quesbank=[]
    const [Notebank, setNotebank] = useState(quesbank)
    const [Notebank1, setNotebank1] = useState(quesbank)
    const [Notebank2, setNotebank2] = useState(quesbank)
    const [Quesbank, setquesbank] = useState(quesbank)
    const [Quesbank1, setquesbank1] = useState(quesbank)
    const [Quesbank2, setquesbank2] = useState(quesbank)
    var getuserdetail=[]
    const [users, setusers] = useState(getuserdetail)
    const [loggeduser, setloggeduser] = useState(getuserdetail)
    var back="https://sastacommunity.herokuapp.com/"
    const getloggeduser = async () => {
        const response = await fetch(`${back}app/getuserdata`, {
            method: "POST",
            headers: {
                "Content-type": "application/json;charset=UTF-8",
                "auth-token": authtoken
            }
            // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            // body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        const json=await response.json()
        setloggeduser(json)
        getexactall()
        getremainders()
        getnotesall()
        getexact()
        getexactnotesall()
    }
    const getusernote = async (id) => {
        const response = await fetch(`${back}app/getparticularnote`, {
            method: "POST",
            headers: {
                "Content-type": "application/json;charset=UTF-8"
            },
            // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify({id}) // body data type must match "Content-Type" header
        });
        const json=await response.json()
        setNoteuser(json)
    }
    const getnote = async () => {
        const response = await fetch(`${back}app/getusernote`, {
            method: "POST",
            headers: {
                "Content-type": "application/json;charset=UTF-8",
                "auth-token": authtoken
            }
            // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            // body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        const json=await response.json()
        setNote(json)
    }
    const allnote = async () => {
        const response = await fetch(`${back}app/getallnote`, {
            method: "POST",
            headers: {
                "Content-type": "application/json;charset=UTF-8",
               
            }
            // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            // body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        const json=await response.json()
        setAllnote(json)
    }
    const getpdffiles = async () => {
        const response = await fetch(`${back}app/getpdffiles`, {
            method: "POST",
            headers: {
                "Content-type": "application/json;charset=UTF-8",
                
            }
            // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            // body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        const json=await response.json()
        setPdffile(json)
    }
    const getremainders = async () => {
        // Default options are marked with *
        const response = await fetch(`${back}app/getuserremainder`, {
            method: "POST",
            headers: {
                "Content-type": "application/json;charset=UTF-8",
                "auth-token": authtoken
            }
            // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            // body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        const json1=await response.json()
        setRemainder(json1)

    }
    const getquestion = async () => {
        // Default options are marked with *
        const response = await fetch(`${back}app/getuserquestion`, {
            method: "POST",
            headers: {
                "Content-type": "application/json;charset=UTF-8",
                "auth-token": authtoken
            }
            // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            // body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        const json2=await response.json()
        
        await setQuestion(json2)
     
    }
    const getquestionuser = async (id) => {
        // Default options are marked with *
        const response = await fetch(`${back}app/getparticularquestion`, {
            method: "POST",
            headers: {
                "Content-type": "application/json;charset=UTF-8",
                "auth-token": authtoken
            },
            // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(id) // body data type must match "Content-Type" header
        });
        const json2=await response.json()
        await setQuestionuser(json2)   
    }
    const getanswer = async () => {
        // Default options are marked with *
        const response = await fetch(`${back}app/getuseranswer`, {
            method: "POST",
            headers: {
                "Content-type": "application/json;charset=UTF-8",
                "auth-token": authtoken
            },
            // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            // body: JSON.stringify({questionid}) // body data type must match "Content-Type" header
        });
        const  json3 = await response.json()
        await setanswer(json3)   
    }
    const getallquestion = async () => {
        // Default options are marked with *
        const response = await fetch(`${back}app/getallquestion`, {
            method: "POST",
            headers: {
                "Content-type": "application/json;charset=UTF-8",
            }
            // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            // body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        const json2=await response.json()
        await setQuestionall(json2)
        
    }
    const getallanswer = async () => {
        // Default options are marked with *
        const response = await fetch(`${back}app/getallanswer`, {
            method: "POST",
            headers: {
                "Content-type": "application/json;charset=UTF-8",
            },
            // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            // body: JSON.stringify({questionid}) // body data type must match "Content-Type" header
        });
        const  json3 = await response.json()
        await setanswerall(json3)   
    }
    const getanyuser = async (userid) => {
        const response = await fetch(`${back}app/getanyuser`, {
            method: "POST",
            headers: {
                "Content-type": "application/json;charset=UTF-8",
                "auth-token": authtoken
            },
            // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify({userid}) // body data type must match "Content-Type" header
        });
        const  json4 = await response.json()
        setusers(json4)
        getexactnotes(json4[0]._id)
        
    }
    const getexactnotesall = async ()=>{
        getnote();
        const ques = await Note;
        getpdffiles()
        var quebank=[]
        const Ans = await Pdffile;
        ques.forEach (item => {
            var anm=[]
            Ans.forEach(element => {
                if ((item._id)===(element.noteid)) {
                    anm.push(element)  
                }
                else
                {
                }
            });
            var nam={
                "Note":item,
                "Pdf":anm
            }
            quebank.push(nam)
            setNotebank(quebank)
        });  
    }
    const getnotesall = async ()=>{
        allnote();
        const ques = await Allnote;
        getpdffiles()
        var quebank=[]
        const Ans = await Pdffile;
        ques.forEach (item => {
            var anm=[]
            Ans.forEach(element => {
                if ((item._id)===(element.noteid)) {
                    anm.push(element)  
                }
                else
                {
                }
            });
            var nam={
                "Note":item,
                "Pdf":anm
            }
            quebank.push(nam)
            setNotebank2(quebank)
        });  
    }
    const getexactnotes = async (id)=>{
        getusernote(id);
        const ques = await Noteuser;
        // console.log(ques)
        getpdffiles()
        var quebank=[]
        const Ans = await Pdffile;
        // console.log(ques)
        ques.forEach (item => {
            var anm=[]
            Ans.forEach(element => {
                if ((item._id)===(element.noteid)) {
                    anm.push(element)  
                }
                else
                {
                }
            });
            var nam={
                "Note":item,
                "Pdf":anm
            }
            quebank.push(nam)
            setNotebank1(quebank)
            // console.log(Quesbank)
        });  
    }
    // getexactnotes()
    // console.log(Notebank)
    const getexactall = async ()=>{
        getallquestion();
        const ques = await Questionall;
        // console.log(ques)
        getallanswer()
        var quebank=[]
        const Ans = await Answerall;
        // console.log(ques)
        ques.forEach (item => {
            var anm=[]
            Ans.forEach(element => {
                // console.log(element.questionid)
                if ((item._id)===(element.questionid)) {
                    // console.log("yes")
                    anm.push(element)  
                }
                else
                {
                    // console.log("no")
                }
            });
            // console.log(anm)
            var nam={
                "question":item,
                "answer":anm
            }
            quebank.push(nam)
            setquesbank1(quebank)
            // console.log(Quesbank)
        }); 
    }
    const getexactuser = async (id)=>{
        getquestionuser(id);
        const ques = await Question;
        // console.log(ques)
        getanswer()
        var quebank=[]
        const Ans = await Answer;
        // console.log(ques)
        ques.forEach (item => {
            var anm=[]
            Ans.forEach(element => {
                // console.log(element.questionid)
                if ((item._id)===(element.questionid)) {
                    // console.log("yes")
                    anm.push(element)  
                }
                else
                {
                    // console.log("no")
                }
            });
            // console.log(anm)
            var nam={
                "question":item,
                "answer":anm
            }
            quebank.push(nam)
            setquesbank2(quebank)
            // console.log(Quesbank)
        });  
    }
    const getexact = async ()=>{
        getquestion();
        const ques = await Question;
        // console.log(ques)
        getanswer()
        var quebank=[]
        const Ans = await Answer;
        // console.log(ques)
        ques.forEach (item => {
            var anm=[]
            Ans.forEach(element => {
                // console.log(element.questionid)
                if ((item._id)===(element.questionid)) {
                    // console.log("yes")
                    anm.push(element)  
                }
                else
                {
                    // console.log("no")
                }
            });
            // console.log(anm)
            var nam={
                "question":item,
                "answer":anm
            }
            quebank.push(nam)
            setquesbank(quebank)
            // console.log(Quesbank)
        });  
    }
    const addnote = async (title,description,tag) => {
        // Default options are marked with *
        const response = await fetch(`${back}app/addnote`, {
            method: "POST",
            headers: {
                "Content-type": "application/json;charset=UTF-8",
                "auth-token": authtoken
            },
            // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify({title,description,tag}) // body data type must match "Content-Type" header
            
        });
        var json10 = await response.json()
        console.log(json10)
    }
    const deleteremainder = async (id) => {
        // Default options are marked with *
        const response = await fetch(`${back}app/delete/remainder/${id}`, {
            method: "delete",
            headers: {
                "Content-type": "application/json;charset=UTF-8",
                "auth-token": authtoken
            }
            
        });
        const  json5 = await response.json()
        console.log(json5)
    }
    const deletenote = async (id) => {
        // Default options are marked with *
        const response = await fetch(`${back}app/delete/note/${id}`, {
            method: "delete",
            headers: {
                "Content-type": "application/json;charset=UTF-8",
                "auth-token": authtoken
            }
            
        });
        const  json5 = await response.json()
        console.log(json5)
    }
    const addremainder = async (title,description,tag,till) => {
        // Default options are marked with *
        const response = await fetch(`${back}app/Addremainder`, {
            method: "POST",
            headers: {
                "Content-type": "application/json;charset=UTF-8",
                "auth-token": authtoken
            },
            // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify({title,description,tag,till}) // body data type must match "Content-Type" header
        });
        var json10 = await response.json()
        console.log(json10)
    }
    const addquestion = async (questiondata) => {
        // Default options are marked with *
        const response = await fetch(`${back}app/addquestion`, {
            method: "POST",
            headers: {
                "Content-type": "application/json;charset=UTF-8",
                "auth-token": authtoken
            },
            // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify({questiondata}) // body data type must match "Content-Type" header
        });
        var json10 = await response.json()
        console.log(json10)
    }
    const addanswer = async (Answerdata,questionid) => {
        // Default options are marked with *
        const response = await fetch(`${back}app/Addanswer`, {
            method: "POST",
            headers: {
                "Content-type": "application/json;charset=UTF-8",
                "auth-token": authtoken
            },
            // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify({Answerdata,questionid}) // body data type must match "Content-Type" header
        });
        var json10 = await response.json()
    }
    return (
        <notecontext.Provider value={{getloggeduser,loggeduser,Note,getnote,Remaind,getremainders,Question,getquestion,addnote,addremainder,addquestion,addanswer,getanswer,getexact,Quesbank,Quesbank1,Quesbank2,Answer,getanyuser,users,deleteremainder,deletenote,getexactall,getexactuser,getusernote,Noteuser,getexactnotesall,getexactnotes,Notebank,Notebank1,getnotesall,Notebank2}}>
            {props.children}
        </notecontext.Provider>
    )
}
export default Notestate