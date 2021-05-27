import { useState, useEffect } from 'react';

import formSchema from './schemas/form-schema.json';
import Form from './components/Form';
import './App.css';

function App () {
  const [schema, setSchema] = useState(null);

  //retrieve information from JSON formSchema and set it to state shema
  useEffect(() => {
    setSchema(formSchema);
  }, []);

  return (
    //only render app when schema is available
    schema &&
    <div className='class-app'>
      <Form schema={schema} />
    </div>
  );
}

export default App;
