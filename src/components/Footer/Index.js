import { social } from "../../data";

const Footer = () => {
  return (
    <footer className="py-2 text-xl text-center footer flex items-center align-center">
      {social.map((social, index) => {
        return(
          <a key={index}>
            <i className={social.icon}>{social.icon}</i>
          </a>
        )
      })}
    </footer>
  );
};

export default Footer;
