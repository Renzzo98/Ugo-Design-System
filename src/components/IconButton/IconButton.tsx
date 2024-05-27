import "./IconButton.css";

import { FC } from "react";
import { motion } from "framer-motion";

interface IconButtonButtonProps {
  link: string;
  textOnDarkBG?: boolean;
  iconPath: string;
  iconSize?: number;
  sideText?: string;
  scrollFunction?: () => void;
}

const IconButton: FC<IconButtonButtonProps> = ({
  link,
  textOnDarkBG,
  iconPath,
  iconSize,
  sideText,
  scrollFunction,
}) => {

  //const { activePage, setActivePage } = useGlobalState();

  function setPageID(pageID: number, scrollFunc: () => void): void {
    // setActivePage(pageID);
    scrollFunc();
    // console.log('Current Page is ' + activePage);
  }

  function openLink(link: string) {
    window.open(link, "_blank");
  }

  return (
    <div>
      <motion.div
        animate={{
            scale: [1, 2, 2, 1.5, 1],
            rotate: [0, 360],
            borderRadius: ["0%", "50%", "0%"]
        }}
        transition={{
            duration: 2,
            ease: "backOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeatDelay: 1
        }}
      >
        <div className="icon-button-container hover-effect" style={{
          gap: sideText ? '15px' : ''
        }}>
          <p style={{ color: textOnDarkBG ? 'white' : 'black' }}>{sideText}</p>
          <img
            onClick={() => link? openLink(link) : {}}
            src={iconPath}
            style={{
              height: `${iconSize}rem`,
              width: `${iconSize}rem`
            }}
            alt="Social Media Path"
            className="icon"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default IconButton;
