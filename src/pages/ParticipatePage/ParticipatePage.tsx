import Layout from '@/components/Layout/Layout.tsx';
import { useState } from 'react';

const ParticipatePage = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Отправка...");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(form)
    });

    const data = await res.json();
    alert(data.message); 
    console.log(form);

    if (data.success) {
      setStatus("Сообщение отправлено");
      console.log("Preview URL:", data.previewUrl);
    } else {
      setStatus("Ошибка отправки");
    }
  };

  return (
    <Layout>
      <h1 className="text-3xl font-bold text-center my-4">Kontakts</h1>
      <div className="flex justify-center items-center">
        <form onSubmit={handleSubmit}>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <legend className="fieldset-legend">Page details</legend>
            <div className="mb-3">
              <label htmlFor="name">Name: </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Name"
                className="input"
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email">Email: </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                className="input"
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message">Message text: </label>
              <textarea
                id="message"
                name="message"
                placeholder="Message text"
                className="textarea"
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              ></textarea>
            </div>
            <button className="btn btn-primary" type="submit">Send a message</button>
            <p>{status}</p>
          </fieldset>
        </form>
      </div>
    </Layout>
  );
};

export default ParticipatePage;
