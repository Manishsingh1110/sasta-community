import React, { useState } from 'react'
import { useSpeechSynthesis } from 'react-speech-kit';
function Texttovoice() {
    const [value, setValue] = useState('');
    const { speak, voices } = useSpeechSynthesis();
    return (
        <div className='container p-2 '>
            <figcaption className="blockquote-footer fs-2">
                                convert text to voice
                            </figcaption>
            <div className='Box p-5'>
            <form>
            <div className="form-floating mb-3">
                <textarea className="form-control" required name='text' value={value}
                    onChange={(event) => setValue(event.target.value)} placeholder="Leave a comment here" id="floatingTextarea" style={{ height: "200px" }} aria-describedby="titlehelp"></textarea>
                <label htmlFor="floatingTextarea">Enter The Text</label>
            </div>
            <button type="button" className="btn btn-primary" onClick={() => speak({ text: value, voice: voices[2] })} data-bs-dismiss="modal">Convert</button>
            {/* <button type="button" className="btn btn-primary ms-2" onClick={() => cancel()} data-bs-dismiss="modal">Stop</button> */}
            </form>
            </div>
        </div>
    )
}

export default Texttovoice