import React, { useState } from 'react';

const FormData = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
    <form>
      <input type="text" name="username" value={formData.username} onChange={handleChange} />
      <input type="email" name="email" value={formData.email} onChange={handleChange} />
      <input type="password" name="password" value={formData.password} onChange={handleChange} />
    </form>

    {/* <div>
      <p>{formData.username}</p>
      <p>{formData.email}</p>
    </div> */}
    </>
  );
};
export default FormData;
