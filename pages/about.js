import styles from "../styles/About.module.css";

const About = () => {
  return (
    <div className={styles.about_container}>
      <div className={styles.img_container}>
        <img src="/aboutme.jpg" width={350} height={527} />
      </div>
      <div className={styles.about_text}>
        <h2>about me</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam laoreet
          nulla a tortor pretium fringilla. Sed est justo, pulvinar in justo
          varius, tempor tincidunt turpis. Orci varius natoque penatibus et
          magnis dis parturient montes, nascetur ridiculus mus. Vivamus ut massa
          non ipsum dignissim consequat vel sed metus. Phasellus tempor elit nec
          velit laoreet, lobortis ultricies leo consequat. Nunc vel augue lorem.
          Morbi a nibh lectus. Suspendisse feugiat augue et lorem congue,
          feugiat facilisis sem fringilla. Aenean sit amet facilisis eros.
          Mauris ullamcorper consequat ullamcorper. In consectetur ultricies ex,
          et tincidunt leo gravida ut. Aliquam vitae velit eget turpis pretium
          faucibus.
        </p>
      </div>
    </div>
  );
};

export default About;
