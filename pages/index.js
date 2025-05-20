import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <section className={styles.container}>
      <Image
        src="/profile.jpeg"
        alt="Stephen Oloo"
        width={240}
        height={240}
        className="mx-auto rounded-full"
      />
      <h2 className={styles.heading}>Hey, I'm Stephen Oloo 👋</h2>
      <p className={styles.subheading}>Cloud Practitioner | Cybersecurity Enthusiast | Web Designer</p>
      <p className={styles.description}>
        Building secure, scalable, and stylish web experiences.
      </p>
    </section>
  )
}
