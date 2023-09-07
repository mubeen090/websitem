import Image from "next/image";
import styles from "./CourseCard.module.css";
import Link from "next/link";
import courseAI from "../../../../public/assets/courseCard/course-ai.png";
import courseML from "../../../../public/assets/courseCard/course-ml.png";
import courseCybersecurity from "../../../../public/assets/courseCard/course-cybersecurity.png";
import courseWebDev from "../../../../public/assets/courseCard/course-webdev.png";
import rating4 from "../../../../public/assets/courseCard/rating4.png";
import students from "../../../../public/assets/courseCard/students.png";

const CourseCard = ({ slug, courseType }) => {
  // Define course-specific details
  const courseDetails = {
    ai: {
      title: "AI Fundamentals - Introduction to Artificial Intelligence",
      lessons: 8,
      studentCount: 150,
      level: "Intermediate",
    },
    ml: {
      title: "Machine Learning Mastery - From Basics to Advanced",
      lessons: 12,
      studentCount: 220,
      level: "Advanced",
    },
    cybersecurity: {
      title: "Cybersecurity Essentials - Protecting Your Digital World",
      lessons: 10,
      studentCount: 180,
      level: "Intermediate",
    },
    webdev: {
      title: "Web Development Bootcamp - Building Modern Web Apps",
      lessons: 14,
      studentCount: 250,
      level: "Beginner",
    },
  };

  // Determine the course details based on the courseType prop
  const selectedCourse = courseDetails[courseType];

  return (
    <>
      <div className={styles.course_card}>
        <div className={styles.course_image_container}>
          {courseType === "ai" && (
            <Image
              src={courseAI}
              width={340}
              height={240}
              className={styles.course_image}
            />
          )}
          {courseType === "ml" && (
            <Image
              src={courseML}
              width={340}
              height={240}
              className={styles.course_image}
            />
          )}
          {courseType === "cybersecurity" && (
            <Image
              src={courseCybersecurity}
              width={340}
              height={240}
              className={styles.course_image}
            />
          )}
          {courseType === "webdev" && (
            <Image
              src={courseWebDev}
              width={340}
              height={240}
              className={styles.course_image}
            />
          )}
        </div>
        <h1 className={styles.heading}>{selectedCourse.title}</h1>
        <div className={styles.stats_contianer}>
          <div className={styles.stats}>
            <Image src={students} />
            Student: {selectedCourse.studentCount}
          </div>
          <div className={styles.stats}>
            <Image src={lessons} />
            Lesson: {selectedCourse.lessons}
          </div>
          <div className={styles.stats}>
            <Image src={level} />
            Level: {selectedCourse.level}
          </div>
        </div>
        <div className={styles.btn_rating}>
          <Link href={`/course/${slug}`}>
            <button className={styles.btn}>Start Course {">"}</button>
          </Link>
          <Image src={rating4} />
        </div>
      </div>
    </>
  );
};

export default CourseCard;
