// Import React dependencies.
import React, { useMemo, useState, useEffect, useCallback} from "react";
// Import the Slate editor factory.
import { createEditor, Editor, Transforms, Text } from 'slate'
import { Container, Row, Col } from "react-bootstrap";
// Import the Slate components and React plugin.
import { Slate, Editable, withReact } from 'slate-react';
import { useAuth0 } from "@auth0/auth0-react";
import AudioRecorder from "../components/audio-recorder";

// Define our app...
const InvokeEditor = () => {
    const apiUrl = process.env.REACT_APP_API_URL;
    console.log(apiUrl);
    const { getAccessTokenSilently } = useAuth0()
    const [message, setMessage] = useState(" ");
    const [isLoading, setIsLoading] = useState(false);
    const [value, setValue] = useState(null);
    async function postDataSecurely (data) {
        try {
          const token = await getAccessTokenSilently();
          const response = await fetch(`${apiUrl}/api/private-editor`, {
            method: 'PUT',
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          });
          const responseData = await response.json();
          setMessage(responseData);
        } catch (error) {
          setMessage(error.message);
          alert(message)
        }
      };

    const useFetch = () => {
      const [response, setResponse] = useState(null);

      useEffect(() => {
        const fetchData = async () => {
          setIsLoading(true); 
          const token = await getAccessTokenSilently();
          const res = await fetch(`${apiUrl}/api/private-editor`, {
            method: 'GET',
            headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'},});
          const payload = await res.json();
          setResponse(payload);
          setIsLoading(false);
          setValue(JSON.parse(payload))
        };
        fetchData();
        }, []);
        return { response, isLoading }
      };

    
    const editor = useMemo(() => withReact(createEditor()), [])

    const Leaf = props => {
      return (
        <span
          {...props.attributes}
          style={{ fontWeight: props.leaf.bold ? 'bold' : 'normal' }}
        >
          {props.children}
        </span>
      )
    }

    const renderLeaf = useCallback(props => {
      return <Leaf {...props} />
    }, [])

    const renderElement = useCallback( props => {
      switch (props.element.type) {
        case 'tag':
          return <h1>{props.children}</h1>

        default:
          return <p {...props.attributes}>{props.children}</p>
      }
    }, [])

    const CustomEditor = {
      isBoldMarkActive(editor) {
        const [match] = Editor.nodes(editor, {
          match: n => n.bold === true,
          universal: true,
        })
        return !!match
      },
    
      isCodeBlockActive(editor) {
        const [match] = Editor.nodes(editor, {
          match: n => n.type === 'code',
        })
    
        return !!match
      },
    
      toggleBoldMark(editor) {
        const isActive = CustomEditor.isBoldMarkActive(editor)
        Transforms.setNodes(
          editor,
          { bold: isActive ? null : true },
          { match: n => Text.isText(n), split: true }
        )
      },
    
      toggleCodeBlock(editor) {
        const isActive = CustomEditor.isCodeBlockActive(editor)
        Transforms.setNodes(
          editor,
          { type: isActive ? null : 'code' },
          { match: n => Editor.isBlock(editor, n) }
        )
      },
    }

    // Voice Transcription handler
    function handleVoice(transcript){
      Editor.insertText(editor, transcript)
      CustomEditor.toggleBoldMark(editor)
    }

    useFetch()

    if (!value){
      return <div> Loading </div>
    }

    return (
       // Add the editable component inside the context.
       
        <Container className="rounded border flex-grow-1 mt-5 ">
        <Container className='flex-grow-1 mt-5'>
        
        <Row>
          <Col contentEditable={false}>
            <AudioRecorder onChange = {handleVoice} contentEditable={false} ></AudioRecorder>
            <Slate editor={editor} value={value} onChange={value => { setValue(value); postDataSecurely(value)}}>
              <Editable 
                renderElement={renderElement}
                renderLeaf={renderLeaf}

                onKeyDown={event => {
                  if (!event.ctrlKey) {
                    return
                  }
                  switch (event.key) {
                    case '`': {
                      event.preventDefault()
                      CustomEditor.toggleCodeBlock(editor)
                      break
                    }
                    case 'b': {
                      event.preventDefault()
                      CustomEditor.toggleBoldMark(editor)
                      break
                    }
                  }
                }}
              />
            </Slate> 
          </Col>
        </Row>          
        </Container>
        </Container>
    )
  }

  export default InvokeEditor;