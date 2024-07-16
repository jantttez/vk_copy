import { ChangeEvent, ReactNode, useRef } from 'react';
interface Props {
  setFile: (file: any) => void;
  accept: string;
  children: ReactNode;
}

export function UploadFile({ setFile, accept, children }: Props) {
  const uploadRef = useRef<HTMLInputElement | null>(null);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files);
  };

  return (
    <div onClick={() => uploadRef.current?.click()}>
      <input
        type='file'
        accept={accept}
        style={{ display: 'none' }}
        onChange={onChange}
        ref={uploadRef}
      />
      {children}
    </div>
  );
}
