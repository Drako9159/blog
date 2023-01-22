import styles from "./Card2.module.css";

export default function Card1({ color, language, post }) {
  console.log(post);

  return (
    <div
      className={styles.container}
      dangerouslySetInnerHTML={{ __html: post.data }}
    ></div>
  );
}
