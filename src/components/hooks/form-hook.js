import {useState} from 'react';
const useForm = (cb) => {
  const [item, setItem] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    cb(item);
  };

  const handleChange = event => {
    event.persist();
    setItem (({ ...item, [event.target.name]: event.target.value}));

  }
  return [handleSubmit, handleChange,item];
}

export default useForm;