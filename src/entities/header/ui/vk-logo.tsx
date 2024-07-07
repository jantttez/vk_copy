import vkLogo from '@shared/assets/vkLogo.svg';
import { useNavigate } from 'react-router-dom';

export function VkLogo() {
  const navigate = useNavigate();

  const vkLogoHandler = () => {
    navigate('/feed');
  };

  return (
    <div
      className='flex items-center text-center my-1 ml-[20%] text-xl font-light cursor-pointer'
      onClick={vkLogoHandler}
    >
      <img src={vkLogo} alt='vkLogo' className='w-10 h-10 mr-2' />
      <h1>ВКОНТАКТЕ</h1>
    </div>
  );
}
