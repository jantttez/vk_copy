import { LucideProps } from 'lucide-react';
import { ForwardRefExoticComponent } from 'react';

interface Props {
  title?: string;
  Icon?: ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>>;
  clickAction?: () => void;
  [key: string]: any;
}

export function UserHeaderButton({ title, Icon, clickAction, ...props }: Props) {
  return (
    <div
      className='mr-[5px] p-2 flex justify-between items-center transition-colors duration-300 rounded-xl bg-header-btn hover:bg-header-btn-hover'
      onClick={clickAction}
    >
      <button>{Icon ? <Icon {...props} /> : null}</button>
      <h3>{title}</h3>
    </div>
  );
}
