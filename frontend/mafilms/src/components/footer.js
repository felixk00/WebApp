const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full selection:py-3 px-6 grid grid-cols-3 mb-5 border-t border-black dark:border-white">
      <div className="col-start-1 flex items-center space-x-6 mt-4">
        <p>
          Melih Dihya Avci
          <br />
          Rainweg 3<br />
          75181 Würm
          <br />
        </p>
      </div>
      <div className="col-start-3 flex items-center justify-end space-x-6">
        <a
          className="text-gray-700 dark:text-gray-200 hover:underline"
          href="https://www.behance.net/melihavci1"
          target="_blank"
          rel="noopener noreferrer"
        >
          Behance
        </a>
        <a
          className="text-gray-700 dark:text-gray-200 hover:underline"
          href="https://www.instagram.com/melihdihya_films/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
      </div>
    </footer>
  );
};

export default Footer;
