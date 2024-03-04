import styles from '../styles/Home.module.scss';

interface Props {
  areas: string[];
}
const Specialization = ({ areas }: Props) => (
  <div className={styles.specialization}>
    {areas.map((a) => (
      <span key={a} className={styles.specialization_area}>
        {' '}
        {a}
      </span>
    ))}
  </div>
);

export default Specialization;
