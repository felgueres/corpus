import React, { useState } from "react";
import { useReactMediaRecorder } from "react-media-recorder";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "react-bootstrap";

const AudioRecorder = (props) => {

  const [message, setMessage] = useState(''); 
  const { getAccessTokenSilently } = useAuth0()
  const apiUrl = process.env.REACT_APP_API_URL;

  async function postBlob(blob) {
    try {
      const token = await getAccessTokenSilently();
      const response = await fetch(`${apiUrl}/api/audio-recorder`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'audio/ogg'
        },
        body: blob
      });
      const responseData = await response.json();
      setMessage(responseData);
    } catch (error) {
      setMessage(error.message);
    }
  };

  async function fetchTranscription () {
    const token = await getAccessTokenSilently();
    const res = await fetch(`${apiUrl}/api/private-transcription`, {
      method: 'GET',
      headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'},});
    const payload = await res.json();
    return payload
  };

  const { status, startRecording, stopRecording, mediaBlobUrl, } = useReactMediaRecorder({ audio: true , 
    onStop: (mediaBlobUrl)=>{
    fetch(mediaBlobUrl).then(
      r => 
      r.blob({ 'type': 'audio/opus' }))
       .then(blob => postBlob(blob))
       .then(() => fetchTranscription())
       .then(t => props.onChange(t.recognition_result));
      }});

  const [clickCount, setClickCount] = useState(0); 
  function handleRecord(){
    if (clickCount === 0){
      setClickCount(clickCount + 1);
      return startRecording();
    } else {
      setClickCount(clickCount - 1)
      return stopRecording();
    }    
  }

  return (
    <div>
      <Button variant="outline-primary" className="float-right" onClick={handleRecord}>Record</Button>
    </div>
  );
};

export default AudioRecorder;