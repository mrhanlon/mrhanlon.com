import {IconDefinition} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import styles from '../styles/Home.module.scss';


interface Props {
  icon: IconDefinition;
  href: string;
  title?: string;
}

const SocialLink = ({icon, href, title}: Props) => (
  <a href={href} className={styles.social}>
    <FontAwesomeIcon icon={icon} title={title} />
  </a>
);

export default SocialLink;
