import { BasicUploadingComponent } from './BasicUploadingComponent';
import { ToDoClientComponent } from './ToDoClientComponent';
import { ToDoServerComponent } from './ToDoServerComponent';

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
        <ToDoServerComponent />
      </div>
      <div style={halfWidthStyle}>
        <BasicUploadingComponent />
      </div>
    </div>
  );
}

export default App;
