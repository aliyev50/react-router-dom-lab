import React, { useState } from 'react';
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import MailboxForm from './components/MailboxForm';
import MailboxList from './components/MailboxList';
import MailboxDetails from './components/MailboxDetails';

const App = () => {
  const [mailboxes, setMailboxes] = useState([]);

  const addBox = (box) => {
    const newBox = {
      _id: mailboxes.length + 1,
      ...box
    };
    setMailboxes([...mailboxes, newBox]);
  };

  return (
		<>
			<NavBar />
      <Routes>
        <Route path="/" element={<main><h1>Mailbox List</h1></main>} />
        <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />
        <Route path="/new-mailbox" element={<MailboxForm addBox={addBox} />} />
        <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} />} />
      </Routes>
		</>
	);
};

export default App;
