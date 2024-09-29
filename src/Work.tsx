import React, { useRef } from 'react'
import gsap from 'gsap'
import parse from 'html-react-parser';

interface WorkProps {
  link: string;
  name: string;
  image: string;
  nameClass?: string;
  containerClass?: string;
  imageClass?: string;
  imageStyle?: React.CSSProperties;
  overlayClass?: string;
}

const Work: React.FC<WorkProps> = ({ link, name, image, nameClass, containerClass, imageClass, imageStyle, overlayClass }) => {
  const $root = useRef<HTMLAnchorElement | null>(null); // Add type to ref
  const $overlay = useRef<HTMLSpanElement | null>(null); // Add type to ref
  const $link = useRef<HTMLSpanElement | null>(null); // Add type to ref
  const $image = useRef<HTMLImageElement | null>(null);

  const handleMouseEnter = (e: React.MouseEvent) => {
    if (!$root.current) return;
    const bounds = ($root.current as unknown as HTMLDivElement).getBoundingClientRect();
    const top = e.clientY < bounds.y + bounds.height / 2;

    if ($link.current) {
      gsap.to($link.current, {
        x: '2.5rem',
        color: '#fff', // Change text color to white
        duration: 0.5,
        ease: 'power3.out'
      });
    }
    if ($image.current) {
      gsap.to($image.current, {
        filter: 'invert(1)', // Invert the image color
        duration: 0.5,
      });
    }
    if ($overlay.current) { // Add null check
      gsap.fromTo(
        $overlay.current,
        {
          scaleY: 0,
          transformOrigin: top ? '0 0' : '0 100%'
        },
        {
          scaleY: 1,
          duration: 0.5,
          ease: 'power3.out'
        }
      );
    }
  };

  const handleMouseLeave = (e: React.MouseEvent) => {
    if (!$root.current) return; // Add null check
    const bounds = $root.current.getBoundingClientRect();
    const top = e.clientY < bounds.y + bounds.height / 2;

    // Ensure elements are defined before killing tweens
    const elements = [$overlay.current, $link.current, $image.current].filter(el => el !== null); // Filter out null elements
    gsap.killTweensOf(elements);

    if ($link.current) {
      gsap.to($link.current, {
        x: 0,
        color: '#000', // Change text color back to black
        duration: 0.3,
        ease: 'power3.out'
      });
    }
    if ($image.current) {
      gsap.to($image.current, {
        filter: 'invert(0)', // Revert the image color
        duration: 0.3,
        ease: 'power3.out'
      });
    }
    if ($overlay.current) { // Add null check
      gsap.to($overlay.current, {
        scaleY: 0,
        transformOrigin: top ? '0 0' : '0 100%',
        duration: 0.7,
        ease: 'power3.out'
      });
    }
  };

  return (
    <a ref={$root} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href={link} target="_blank" rel="noopener noreferrer"
      className={`relative flex items-center ${containerClass}`}>
      {image && (
        <img ref={$image} src={image} alt={name} className={`${imageClass} ${imageStyle}`} /> // Apply the image style correctly
      )}
      <span
        className={nameClass} 
        ref={$link}
      >
        {parse(name)}
      </span>
      <span className={overlayClass} ref={$overlay}></span>
    </a>
  );
};

export default Work;
