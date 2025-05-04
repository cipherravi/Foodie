import { Link } from "react-router-dom";
import "./css/Footer.css";

function Footer() {
  //tailwind classes
  const linkContainer = "flex flex-col justify-center items-center gap-5";
  const linkTitle = "text-3xl mb-5 font-gilroy-medium text-[#14181f]";
  const anchor = "text-xl font-gilroy-light cursor-pointer text-[#82858a]";

  return (
    <>
      <div className="div-wrapper w-full h-1/3 bg-[#f0f0f5] mt-[10vh] flex justify-around items-center">
        <div className="footer-logo w-24  flex flex-col justify-start items-center">
          <img className="w-full" src="/foodie-logo.png" alt="" />
          <div className="title font-gilroy-bold text-3xl text-[#b80000]">
            Foodie
          </div>
        </div>
        <div className={`${linkContainer} company-info `}>
          <span className={`${linkTitle}`}>Company</span>
          <Link className={`${anchor} `} href="/">
            About us
          </Link>
          <Link className={`${anchor}`} href="/">
            Careers
          </Link>
          <Link className={`${anchor}`} href="/">
            Team
          </Link>
        </div>
        <div className={`${linkContainer} contact-us`}>
          <span className={`${linkTitle}`}>Contact us</span>
          <Link className={`${anchor}`} href="/">
            Help & Support
          </Link>
          <Link className={`${anchor}`} href="/">
            Partner with us
          </Link>
          <Link className={`${anchor}`} href="/">
            Ride With us
          </Link>
        </div>
        <div className={`${linkContainer} social-links`}>
          <span className={`${linkTitle}`}>Social Links</span>
          <a
            className={`${anchor}`}
            href="https://linkedin.com/in/cipherravi"
            target="_blank"
          >
            Linkedin <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            className={`${anchor}`}
            href="https://x.com/cipherravi"
            target="_blank"
          >
            Twitter <i className="fa-brands fa-x-twitter"></i>
          </a>
          <a
            className={`${anchor}`}
            href="https://github.com/cipherravi"
            target="_blank"
          >
            Github <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
