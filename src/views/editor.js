import React, { useMemo, useState, useEffect, useCallback } from "react";
import { createEditor, Editor } from 'slate'
import { Container, Row, Col } from "react-bootstrap";
import { Slate, Editable, withReact } from 'slate-react';
import { useAuth0 } from "@auth0/auth0-react";
import { OpenSearch, Cards } from "../components";

const InvokeEditor = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const { getAccessTokenSilently } = useAuth0()
  const [message, setMessage] = useState(" ");
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState(null);
  async function postDataSecurely(data) {
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
            'Content-Type': 'application/json'
          },
        });
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

  const renderElement = useCallback(props => {
    switch (props.element.type) {
      case 'tag':
        return <h1>{props.children}</h1>

      default:
        return <p {...props.attributes}>{props.children}</p>
    }
  }, [])

  const [searchTerms, setSearchTerms] = useState("");

  function handleSearch(searchOutput) {
    Editor.insertText(editor, searchOutput)
    setSearchTerms(searchOutput)
  }

  useFetch()

  if (!value) {
    return <div> Loading </div>
  }

  return (
    <Container className="flex-grow-1 mt-3">
      <Row className='mt-4 mb-5'>
        <Col sm={8} className='border rounded pt-2'>
          <Slate editor={editor} value={value} onChange={value => { setValue(value); postDataSecurely(value) }}>
            <Editable renderElement={renderElement} renderLeaf={renderLeaf}/>
          </Slate>
          <OpenSearch onChange={handleSearch} contentEditable={false}> </OpenSearch>
        </Col>
        <Col sm={1}></Col>
        <Col sm={3} style={{ paddingLeft: 0, paddingRight: 0 }}>
          <Cards searchTerms={searchTerms}></Cards>
        </Col>
      </Row>
    </Container>
  )
}
export default InvokeEditor;
