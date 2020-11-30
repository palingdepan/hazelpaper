export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <p>
          Copyright &copy; {new Date().getFullYear()} hazelpaper. All Rights
          Reserved.
        </p>
      </div>
      <style jsx>{`
        footer {
          width: 100%;
          background-color green;
          padding: 16px;
          margin-bottom: 71.4px;
        }

        .footer-container {
          margin: auto;
          max-width: 1192px;
        }

        /* Small devices (portrait tablets and large phones, 600px and up) */
        @media only screen and (min-width: 600px) {
          footer {
            margin-bottom: 0;
          }
        }
      `}</style>
    </footer>
  );
}
