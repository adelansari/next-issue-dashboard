"use client";

const Footer = () => {
  return (
    <div className="relative mt-auto bottom-4 dark:text-white font-bold flex justify-center items-center">
      <span>Github </span>
      <a
        className="text-orange-400 ml-1"
        href="https://github.com/adelansari/next-issue-dashboard"
      >
        <span className="text-orange-600 cursor-pointer hover:text-green-600 duration-200 bold">
          Repository
        </span>
      </a>
    </div>
  );
};

export default Footer;
