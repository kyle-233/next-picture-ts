import Image from "next/image";
import styles from "./Cube.module.scss";
export const Cube = () => {
  return (
    <div className={styles.content}>
      <div className={`${styles.item} ${styles.front}`}>
        <Image
          className={styles.img}
          src="https://images.pexels.com/photos/18187689/pexels-photo-18187689.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          width={300}
          height={300}
          alt="1"
        />
      </div>
      <div className={`${styles.innerItem} ${styles.front}`}>
        <Image
          className={styles.img}
          src="https://images.pexels.com/photos/18187689/pexels-photo-18187689.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          width={300}
          height={300}
          alt="1"
        />
      </div>
      <div className={`${styles.item} ${styles.top}`}>
        <Image
          className={styles.img}
          src="https://images.pexels.com/photos/16033674/pexels-photo-16033674.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          width={300}
          height={300}
          alt="2"
        />
      </div>
      <div className={`${styles.innerItem} ${styles.top}`}>
        <Image
          className={styles.img}
          src="https://images.pexels.com/photos/16033674/pexels-photo-16033674.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          width={300}
          height={300}
          alt="2"
        />
      </div>
      <div className={`${styles.item} ${styles.left}`}>
        <Image
          className={styles.img}
          src="https://images.pexels.com/photos/23384634/pexels-photo-23384634.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          width={300}
          height={300}
          alt="3"
        />
      </div>
      <div className={`${styles.innerItem} ${styles.left}`}>
        <Image
          className={styles.img}
          src="https://images.pexels.com/photos/23384634/pexels-photo-23384634.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          width={300}
          height={300}
          alt="3"
        />
      </div>
      <div className={`${styles.innerItem} ${styles.left}`}>
        <Image
          className={styles.img}
          src="https://images.pexels.com/photos/23384634/pexels-photo-23384634.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          width={300}
          height={300}
          alt="3"
        />
      </div>
      <div className={`${styles.item} ${styles.back}`}>
        <Image
          className={styles.img}
          src="https://images.pexels.com/photos/22857372/pexels-photo-22857372.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          width={300}
          height={300}
          alt="4"
        />
      </div>
      <div className={`${styles.innerItem} ${styles.back}`}>
        <Image
          className={styles.img}
          src="https://images.pexels.com/photos/22857372/pexels-photo-22857372.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          width={300}
          height={300}
          alt="4"
        />
      </div>
      <div className={`${styles.item} ${styles.bottom}`}>
        <Image
          className={styles.img}
          src="https://images.pexels.com/photos/22145412/pexels-photo-22145412.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          width={300}
          height={300}
          alt="5"
        />
      </div>
      <div className={`${styles.innerItem} ${styles.bottom}`}>
        <Image
          className={styles.img}
          src="https://images.pexels.com/photos/22145412/pexels-photo-22145412.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          width={300}
          height={300}
          alt="5"
        />
      </div>
      <div className={`${styles.item} ${styles.right}`}>
        {" "}
        <Image
          className={styles.img}
          src="https://images.pexels.com/photos/20430264/pexels-photo-20430264.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          width={300}
          height={300}
          alt="6"
        />
      </div>
      <div className={`${styles.innerItem} ${styles.right}`}>
        {" "}
        <Image
          className={styles.img}
          src="https://images.pexels.com/photos/20430264/pexels-photo-20430264.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          width={300}
          height={300}
          alt="6"
        />
      </div>
    </div>
  );
};
