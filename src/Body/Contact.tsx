import { FaTwitter, FaGithub } from "react-icons/fa";
import classNames from "classnames";
const Social = () => {
  return (
    <div className={"flex flex-row justify-center mt-8"}>
      {[
        {
          Icon: FaTwitter,
          href: "https://twitter.com/",
        },
        {
          Icon: FaGithub,
          href: "https://github.com/Dreamerryao",
        },
      ].map(({ Icon, href }, i) => (
        <a target="_blank" rel="noreferrer" href={href}>
          <Icon
            className={classNames(
              i < 3 && "mr-4 lg:mr-8",
              "hover:opacity-80",
              "h-8 w-8 lg:h-10 lg:w-10"
            )}
          />
        </a>
      ))}
    </div>
  );
};
const Contact = () => {
  return (
    <div
      data-anchor="contact"
      id="contact"
      className=" h-screen flex flex-col items-center justify-center p-8"
      style={{ backgroundColor: "rgb(128, 255, 232)", color: "#613F75" }}
    >
      <div className="text-3xl font-medium">
        If you want to say hello, I'll be there!
        <Social />
      </div>
    </div>
  );
};

export default Contact;
