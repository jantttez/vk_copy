interface Props {
  title: string;
  length: number;
}

export const FriendsHeader = ({ length, title }: Props) => {
  return (
    <div className='flex items-center w-full mb-2'>
      <h1>{title}</h1>
      <span className='ml-2'>{length}</span>
    </div>
  );
};
