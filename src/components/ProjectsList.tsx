import ProjectLink from './ProjectLink';

const ProjectsList: React.FC = () => {
  return (
    <div>
      <ProjectLink to="/projects/proj1">
        Project 1
      </ProjectLink>
      {/* ... other projects ... */}
    </div>
  );
};
