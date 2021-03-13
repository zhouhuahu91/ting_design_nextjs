import styles from "../styles/Contact.module.css";
import Image from "next/image";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

const contact = () => {
  return (
    <div className={styles.container}>
      <h2>contact</h2>
      <div className={styles.info}>
        <PhoneIphoneIcon />
        <a href="tel:0031630717400">+31 6 30 71 74 00</a>
      </div>
      <div className={styles.info}>
        <MailOutlineIcon />
        <a href="mailto:cting.zhan@gmail.com">cting.zhan@gmail.com</a>
      </div>
      <div className={styles.info}>
        <Image src="/wechatIcon.svg" width={24} height={24} />
        <p>xxsnsjszhl</p>
      </div>
      <div className={styles.qr}>
        <Image src="/wechat.JPG" width={150} height={150} />
        <Image src="/xiaohongshuQR.jpg" width={150} height={150} />
      </div>
    </div>
  );
};

export default contact;
