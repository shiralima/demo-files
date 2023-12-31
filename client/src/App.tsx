import { BasicUploadingComponent } from './BasicUploadingComponent';
import { ToDoClientComponent } from './ToDoClientComponent';

function App() {
  const containerStyle = {
    display: 'flex',
    width: '100%',
  };

  const halfWidthStyle = {
    width: '50%',
  };

  return (
    <div style={containerStyle}>
      <div style={halfWidthStyle}>
        <ToDoClientComponent />
      </div>
      <div style={halfWidthStyle}>
        <BasicUploadingComponent />
      </div>
    </div>
  );
}

export default App;
