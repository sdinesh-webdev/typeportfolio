import React from 'react';
import Link from 'next/link';

interface ProjectLinkProps {
  to: string;
  children: React.ReactNode;
}

const ProjectLink: React.FC<ProjectLinkProps> = ({ to, children }) => {
  return (
    <Link href={to} passHref legacyBehavior>
      <a target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    </Link>
  );
};

export default ProjectLink;
