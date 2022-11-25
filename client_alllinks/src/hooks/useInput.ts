import { useCallback, useState } from 'react';

export function useInputCustom<T>(initialValues: T){

  const [values, setValues] = useState<T | null>(initialValues);
  const [loading, setLoading] = useState(false);


  const handleChange = useCallback((event) => {
    const auxValues = { ...values } as T;

    if(event.target.type == "checkbox" ){
      auxValues[event.target.name] = event.target.checked;
    }else{
      auxValues[event.target.name] = event.target.value;
    }

    setValues(auxValues);
  }, [values]);

  const reset = useCallback(() => (event) => {
    event.preventDefault();
    setValues(null)
  } , []);

  const handleSubmit = useCallback((callback) => (event) => {
    event.preventDefault();
    setLoading(true);
    callback();
    setLoading(false);
  } , []);

  return { values, loading , handleChange, handleSubmit, reset};
};

export default useInputCustom;