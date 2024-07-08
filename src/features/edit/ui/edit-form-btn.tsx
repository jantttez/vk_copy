import { Accessibility } from 'lucide-react';
import styles from './edit-form-btn.module.scss';
import { Spinner } from '@chakra-ui/react';

interface Props {
  loading: boolean;
}
export const EditFormButton: React.FC<Props> = ({ loading }) => {
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <button type='submit' className={styles.submitButton}>
          <h3>Submit</h3>
          <Accessibility size={20} />
        </button>
      )}
    </>
  );
};
