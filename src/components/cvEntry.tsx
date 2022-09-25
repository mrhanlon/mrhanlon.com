import styles from "../styles/Home.module.scss";

interface Props {
    children: JSX.Element;
    year?: number|string;
    endYear?: number|string;
}

const CvEntry = ({children, year, endYear}: Props) => (
    <div className={styles.cv_entry}>
        <span className={styles.cv_entry_detail}>
            {children}
        </span>
        {' '}
        {year && (
            <span className={styles.cv_entry_year}>
                {year}{endYear && (<>&ndash;{endYear}</>)}
            </span>
        )}
    </div>
);

export default CvEntry;