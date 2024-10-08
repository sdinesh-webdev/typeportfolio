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
  alt: string; // Add alt prop for accessibility
}

const Work: React.FC<WorkProps> = ({ 
  link, 
  name, 
  image, 
  nameClass, 
  containerClass, 
  imageClass, 
  imageStyle, 
  overlayClass,
  alt 
}) => {
  const $root = useRef<HTMLAnchorElement>(null);
  const $overlay = useRef<HTMLSpanElement>(null);
  const $link = useRef<HTMLSpanElement>(null);
  const $image = useRef<HTMLImageElement>(null);

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!$root.current) return;
    const bounds = $root.current.getBoundingClientRect();
    const top = e.clientY < bounds.y + bounds.height / 2;

    if ($link.current) {
      gsap.to($link.current, {
        x: '2.5rem',
        color: '#fff',
        duration: 0.5,
        ease: 'power3.out'
      });
    }
    if ($image.current) {
      gsap.to($image.current, {
        filter: 'invert(1)',
        duration: 0.5,
      });
    }
    if ($overlay.current) {
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

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!$root.current) return;
    const bounds = $root.current.getBoundingClientRect();
    const top = e.clientY < bounds.y + bounds.height / 2;

    const elements = [$overlay.current, $link.current, $image.current].filter((el): el is NonNullable<typeof el> => el !== null);
    gsap.killTweensOf(elements);

    if ($link.current) {
      gsap.to($link.current, {
        x: 0,
        color: '#000',
        duration: 0.3,
        ease: 'power3.out'
      });
    }
    if ($image.current) {
      gsap.to($image.current, {
        filter: 'invert(0)',
        duration: 0.3,
        ease: 'power3.out'
      });
    }
    if ($overlay.current) {
      gsap.to($overlay.current, {
        scaleY: 0,
        transformOrigin: top ? '0 0' : '0 100%',
        duration: 0.7,
        ease: 'power3.out'
      });
    }
  };

  return (
    <a 
      ref={$root} 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave} 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`relative flex items-center ${containerClass}`}
    >
      {image && (
        <img 
          ref={$image} 
          src={image} 
          alt={alt} 
          className={imageClass} 
          style={imageStyle} 
        />
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