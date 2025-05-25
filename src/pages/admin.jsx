import React, { useEffect, useState } from 'react';
import './admin.css';
import { useNavigate } from 'react-router-dom';

function Admin() {
  const [messages, setMessages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:5000/admin-data')
      .then((res) => res.json())
      .then((data) => setMessages(data));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');  
    navigate('/login');                
  };

  const markAsRead = async (id) => {
    await fetch(`http://localhost:5000/mark-read/${id}`, {
      method: 'PUT',
    });

    setMessages((prevMessages) =>
      prevMessages.map((msg) =>
        msg._id === id ? { ...msg, read: true } : msg
      )
    );
  };

  return (
    <div className="admin-container">
      <div className="admin-header">
        <h1 className="admin-title">Admin Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 float-right"
        >
          Logout
        </button>
      </div>

      <ul className="message-list">
        {messages.map((msg) => (
          <li key={msg._id} className={`message-card ${msg.read ? 'read' : ''}`}>
            <p><strong>Name:</strong> {msg.name}</p>
            <p><strong>Email:</strong> {msg.email}</p>
            <p><strong>Message:</strong> {msg.message}</p>

            <div className="message-actions">
              {!msg.read && (
                <button
                  onClick={() => markAsRead(msg._id)}
                  className="mark-read-btn"
                >
                  Mark as Read
                </button>
              )}
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${msg.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="send-email-btn"
              >
                Send Email
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Admin;
