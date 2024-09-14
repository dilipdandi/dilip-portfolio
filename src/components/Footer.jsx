const Footer = () => {
  return (
    <footer className="relative flex flex-col gap-2 items-start md:items-center md:flex-row md:gap-6 py-4 px-4 rounded-md w-full bg-backgroundColor">
      <div className="flex items-center justify-center gap-4 text-xl text-backgroundColor">
        <a href="https://www.linkedin.com/in/dilipdandi" target="_blank">
          <i className="fa-brands fa-linkedin-in text-[#fff]"></i>
        </a>
        <a href="https://github.com/dilipdandi" target="_blank">
          <i className="fa-brands fa-github text-[#fff]"></i>
        </a>
        <a href="https://leetcode.com/u/dilipdandi/" target="_blank">
          <i className="fa-solid fa-code text-[#fff]"></i>
        </a>
        <a href="https://www.hackerrank.com/profile/dilipdandi90" target="_blank">
          <i className="fa-brands fa-hackerrank text-[#fff]"></i>
        </a>
      </div>
      <div className="absolute right-0 bottom-0 text-right text-sm text-textColor p-2">
        <p>&copy; Dilip Dandi {new Date().getFullYear()}</p>
        <p>Automation Testing | Web Developer</p>
      </div>
    </footer>
  );
};

export default Footer;
