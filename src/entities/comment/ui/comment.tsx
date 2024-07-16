import { useRef, useState } from 'react';
import styles from './comment.module.scss';
import { useClickOutside } from '@shared/hooks';
import { Comment as IComment } from '../model';

import { useUserStore } from '@entities/user';
import { CommentHeader } from './comment-header';

interface Props {
  comment: IComment;
  renderCommentDeleteButton: () => JSX.Element;
}

export function Comment({ comment, renderCommentDeleteButton }: Props) {
  const dropDownMenuRef = useRef<HTMLDivElement | null>(null);
  const curUser = useUserStore((store) => store.user);
  const [menuVisible, setMenuVisible] = useState(false);
  if (!curUser) return null;

  useClickOutside({ ref: dropDownMenuRef, setState: setMenuVisible });

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className={styles.comment}>
      <CommentHeader comment={comment} toggleMenu={toggleMenu} />
      <div className={styles.text}>{comment.content}</div>
      <div className={styles.menu}>
        {menuVisible && (
          <div className={styles.dropdownMenu} ref={dropDownMenuRef}>
            {renderCommentDeleteButton()}
          </div>
        )}
      </div>
    </div>
  );
}
