import './App.css';
import AddProjectForm from './components/AddProjectForm';
import LoginForm from './components/LoginForm';
import ProjectList from './components/ProjectList';
import React, { useState } from 'react';
import Modal from './components/Modal';
import RegisterForm from './components/RegistForm';

function App() {
  const [registerModalActive, setRegisterModalActive] = useState(false);
  const [loginModalActive, setLoginModalActive] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setRegisterModalActive(true)}>Registre</button>
      <Modal active={registerModalActive} setActive={setRegisterModalActive}>
        <RegisterForm />
      </Modal>

      <button onClick={() => setLoginModalActive(true)}>Login</button>
      <Modal active={loginModalActive} setActive={setLoginModalActive}>
        <LoginForm />
      </Modal>

      <h1>ProjectList</h1>
      <ProjectList />

      <h1>AddProjectForm</h1>
      <AddProjectForm />
    </div>
  );
}

export default App;