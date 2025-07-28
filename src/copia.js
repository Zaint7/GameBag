import "./App.css";
function App() {
  return (
    <div className="App" >
      <nav className="navbar" >

        <div className="container-fluid position-relative" >
               
          <div className="container d-flex align-items-center">
            <a
              class="navbar-brand position-absolute start-50 translate-middle-x"
              style={{top:'-10px'}}
              href="#"
            >
              <img
                src="https://www.svgrepo.com/show/480388/game-9.svg"
                alt="Game Icon"
                width="40"
                height="40"
              />
            </a>
          </div>

          <div className="container d-flex align-items-center">
            <span
              class="navbar-brand position-absolute start-50 translate-middle-x fw-bold"
              style={{fontFamily: 'Roboto, sans-serif',
              top: '22px', fontSize: '14px',  
              }}
              href="#"
            >
            GameBag
            </span>
          </div>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Link
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>

                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" aria-disabled="true">
                  Disabled
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <header className="App-header">

        <Button className="Aceptar" variant="Warning">
          Aceptar
        </Button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;




.tituloapp{
  color: aqua;
  font-size: 14px;

}

.App {
  text-align: center;
}

.App-logo {
  height: 40vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}

.App-header {
  background-color: #ffffff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: black;
}

.App-link {
  color: #61dafb;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
