import React,{useState,useContext ,useEffect} from 'react'
import Notecontext from '../context/Notecontext';
import widthcontext from '../context/widthcontext';
import Formsanswer from './Formsanswer';
function Notequestion(props) {
  var wedth=useContext(widthcontext);
  var context = useContext(Notecontext);
  var {Answer,getanswer} = context;
  const { note } = props;
  var [id, seti] = useState({id:""})
  const handleclick = async (e) => {
    e.preventDefault();
    var n=e.target.id;
    await seti({ ...id, id: n })
}
useEffect(()=>{
  console.log(note._id)
  getanswer(note._id)
},[])
// console.log(id)
  return (
    <div className={wedth ? "card border-light bg-secondary  col-md-11 m-3":"card border-light bg-dark  col-md-3 mt-3"}>
      <div className="card-header ">{note.date}</div>
      <div className="card-body">
        <h5 className="card-title"></h5>
        <p className="card-text">{note.questiondata}</p>
        {Answer.map((Ans) => {
                return Ans._id;
            }
            )}
      </div>
      <button type="button" className="btn btn-success justify-content-end" onClick={handleclick} data-bs-toggle="modal" id={note._id} data-bs-target="#exampleModal1">
            <i className="fa-solid fa-plus me-1"></i>Give your opinion
            </button>
      <Formsanswer id={id.id} />
    </div>
  )
}

export default Notequestion