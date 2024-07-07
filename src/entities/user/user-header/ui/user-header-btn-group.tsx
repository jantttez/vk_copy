import styles from './user-heade-btn-group.module.scss';
import { getUserId } from '@shared/lib';
import { Box } from '@chakra-ui/react';

interface Props {
  renderEditButton: () => JSX.Element;
  headerUserId: string;
}

export function UserHeaderBtnGroup({ renderEditButton, headerUserId }: Props) {
  const currUserId = getUserId();
  return (
    <Box>
      <Box className={styles.buttonGroup}>{currUserId === headerUserId ? renderEditButton() : null}</Box>
    </Box>
  );
}
