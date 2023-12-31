<<<<<<< HEAD
import { UploadingComponent } from './UploadingComponent';
import { ToDoClientComponent } from './ToDoClientComponent';
=======
import { BasicUploadingComponent } from './BasicUploadingComponent';
import { ToDoClientComponent } from './ToDoClientComponent';
import { ToDoServerComponent } from './ToDoServerComponent';
>>>>>>> 5dca9d3354556bc96877f31cb25aa9d5c7d1807f

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
