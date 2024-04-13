function FindMe() {
  return (
    <div className="contacte">
      <div className="contacte-me">
        <h2>Encontre me em</h2>
        <p>
          Sinta-se livre para se <span>contactar</span> a mim
        </p>
      </div>
      <div className="find-me">
        <ul className="social-links">
          <li>
            <a href="https://github.com/leusonguenha">
              <i class="fa-brands fa-github"></i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/leuso_justino">
              {" "}
              <i class="fa-brands fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/leuso-nguenha-0b8b28244/">
              <i class="fa-brands fa-linkedin-in"></i>{" "}
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/leusojustino/">
              <i class="fa-brands fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FindMe;
