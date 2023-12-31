import { CSSProperties } from 'react';

export function ToDoServerComponent() {
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
      <h3>Server side</h3>
      <ul style={listStyle}>
        <li style={listItemStyle}>1. Install files package</li>
        <li style={listItemStyle}>2. Configure the fileshandler module</li>
        <li style={listItemStyle}>3. Generate server functions within the controller and service to save the image</li>
        <h4>Connect between client & server</h4>
        <li style={listItemStyle}>4. Create a request to the endpoint created in the previous step</li>
        <li style={listItemStyle}>5. Display the saved image on the client-side once it's stored on the server</li>
        <li style={listItemStyle}>Advance options: save multiple files, save files with different types (image and file)</li>
      </ul>
      <p>
        <a href="https://hilma.atlassian.net/wiki/spaces/TD/pages/83362528/Hilma+Fileshandler#Installation-server" target="_blank" style={linkStyle}>Link to doc</a>
      </p>

    </div>
  );
}