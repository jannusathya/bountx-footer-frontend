const Footer = () => {
  return (
    <footer className="bx-footer">
      <div className="bx-footer__container">

        <section className="bx-footer__brand">
          <h2 className="bx-footer__logo">Bount-X</h2>
          <p className="bx-footer__tagline">
            Community for Hackers, Designers & Developers
          </p>
        </section>

        <nav className="bx-footer__nav">
          <h4>Product</h4>
          <a href="#">Features</a>
          <a href="#">Community</a>
          <a href="#">Events</a>
        </nav>

        <nav className="bx-footer__nav">
          <h4>Company</h4>
          <a href="#">About</a>
          <a href="#">Careers</a>
          <a href="#">Contact</a>
        </nav>

        <nav className="bx-footer__nav">
          <h4>Legal</h4>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </nav>

      </div>

      <div className="bx-footer__bottom">
        © 2025 Bount-X. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
