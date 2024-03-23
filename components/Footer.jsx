let currentDate = new Date();

const Footer = () => (
  <div className="foot">
    <footer className="text">
      &copy; {currentDate.getFullYear()} - Leuso Nguenha
    </footer>
  </div>
);

export default Footer;
