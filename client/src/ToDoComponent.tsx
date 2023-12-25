function ToDoComponent() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            backgroundColor: '#333',
            color: '#fff',
            textAlign: 'center',
            padding: '20px',
            flexDirection: 'column'
        }}>
            <h1 style={{ color: 'lightblue' }}>Let's start building our <br/> uploading files component :)</h1>
            <h3>Client side</h3>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li style={{ marginBottom: '10px' }}>1. First install files package</li>
                <li style={{ marginBottom: '10px' }}>2. Now use basic FileInput component and filesUploader</li>
                <li style={{ marginBottom: '10px' }}>3. Present the image before send it to server</li>
                <li style={{ marginBottom: '10px' }}>Advance options: add handel for errors, handel multiple files with MultipleFileInput, delete file </li>
            </ul>
            <h3>Server side</h3>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li style={{ marginBottom: '10px' }}>1. First install files package</li>
                <li style={{ marginBottom: '10px' }}>2. Now confige (?) the fileshandler moudle</li>
                <li style={{ marginBottom: '10px' }}>3. Create </li>
                <li style={{ marginBottom: '10px' }}>Advance options: add handel for errors, handel multiple files with MultipleFileInput</li>
            </ul>
            <p>
                <a href="#" style={{ textDecoration: 'none', color: 'lightblue' }}>Here will be a link to basic docs</a>
            </p>
        </div>
    );
}

export default ToDoComponent;