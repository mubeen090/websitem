import styles from "./Services.module.css";
import Heading from "../common/Heading/Heading";
import Image from "next/image";

import skillIntern from "../../../public/assets/serviceAssets/skill-intern.png";

const data = [
  {
    logo: skillIntern,
    heading: "Skill Internship Programs",
    para: "Unlock your potential with our skill-focused internship programs.",
  },
];

const Services = () => {
  return (
    <>
      <section className={styles.services_container} id="services">
        <Heading
          para1={"Our Services"}
          heading={"Fostering Skill Development & Internship Opportunities"}
          para2={""}
        />
        <div className={styles.services}>
          {data.map((item, index) => {
            return (
              <div className={styles.service} key={index}>
                <div className={styles.row1}>
                  <div className={styles.image_container}>
                    <Image src={item.logo} />
                  </div>
                  <h1 className={styles.heading}>{item.heading}</h1>
                </div>
                <p className={styles.para}>{item.para}</p>
                <h2 className={styles.learn_more}>Learn More {">"}</h2>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Services;
