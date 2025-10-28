import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

import { AGGridTestHarness } from '../../src/lib/lib';
import { AgGridReact } from 'ag-grid-react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { carData, columnDefs } from './testData';

const App = () => {
  return (
    <div className="ag-theme-alpine" style={{ height: 1600, width: 600 }}>
      <AGGridTestHarness gridId="my-grid-id">
        <AgGridReact
          rowData={carData}
          columnDefs={columnDefs} />
      </AGGridTestHarness>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
