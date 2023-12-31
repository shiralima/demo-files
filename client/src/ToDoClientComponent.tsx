import { CSSProperties } from 'react';

export function ToDoClientComponent() {
  const containerStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '20px',
    flexDirection: 'column'
  };

  const headingStyle: CSSProperties = {
    color: 'lightblue'
  };

  const listStyle: CSSProperties = {
    listStyleType: 'none',
    padding: 0
  };

  const listItemStyle: CSSProperties = {
    marginBottom: '10px'
  };

  const linkStyle: CSSProperties = {
    textDecoration: 'none',
    color: 'lightblue'
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Let's start building our uploading files project :)</h1>
      <h3>Client side</h3>
      <ul style={listStyle}>
        <li style={listItemStyle}>1. Install files package</li>
        <li style={listItemStyle}>2. Use basic FileInput component and filesUploader</li>
        <li style={listItemStyle}>3. Present the image before sending it to the server</li>
        <li style={listItemStyle}>Advance options: add handle for errors, delete file, handle multiple files with MultipleFileInput</li>
      </ul>
      <p>
        <a href="https://hilma.atlassian.net/wiki/spaces/TD/pages/83362528/Hilma+Fileshandler#Installation-client" target="_blank" style={linkStyle}>Link to doc</a>
      </p>
    </div>
  );
}