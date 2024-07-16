export function PostImageCard({ image }: { image: string }) {
  return <img src={image} alt='Post Image' className='w-full rounded-lg' />;
}
