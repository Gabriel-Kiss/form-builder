import { useState, useEffect } from 'react';

import formSchema from './schemas/form-schema.json';
import Form from './components/Form';
import './App.css';

function App () {
  const [schema, setSchema] = useState(null);

  useEffect(() => {
    setSchema(formSchema);
  }, []);

  return (
    schema &&
    <div className='class-app'>
      <Form schema={schema} />
    </div>
  );
}

export default App;
