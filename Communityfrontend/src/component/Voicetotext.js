import React, { useContext,useState } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import widthcontext from '../context/widthcontext';
function Voicetotext() {
  var {wedth}=useContext(widthcontext);
  const [num, setnum] = useState(false)
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
      } = useSpeechRecognition();
    if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
      }
    return (
        <>
        <div className={wedth ? 'container p-5 text-secondary': 'container  text-secondary'} >
            <div className={wedth ? 'p-3': ''} >
        <p>Microphone: {listening ? 'on' : 'off'}</p>
        </div>
        <div>   
        <button type="button" className="btn btn-primary ms-3" onClick={SpeechRecognition.startListening} data-bs-dismiss="modal">Start</button>
        <button type="button" className="btn btn-primary ms-3" onClick={SpeechRecognition.stopListening} data-bs-dismiss="modal">Stop</button>
        <button type="button" className="btn btn-primary ms-3" onClick={resetTranscript} data-bs-dismiss="modal">Reset</button>
        </div>
        <div className='container pt-5'>
            <div className={wedth ? 'p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end': ' bg-info bg-opacity-10 border border-info border-start-0 rounded-end'} style={{minHeight:"50vh"}}>
            <p>{transcript}</p>
            </div>
        
        </div>
      </div>
      </>
    )
}

export default Voicetotext