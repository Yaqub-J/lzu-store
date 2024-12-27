import Image from 'next/image';
import clsx from 'clsx';

export default function LogoIcon(props: Omit<React.ComponentProps<'img'>, 'src' | 'alt' | 'width' | 'height'>) {
  return (
    <Image
      src="logo.png"
      alt={`${process.env.SITE_NAME} logo`}
      width={32}
      height={28}
      className={clsx(
        'h-4 w-4',
        'dark:invert',
        props.className
      )}
      {...props}
    />
  );
}