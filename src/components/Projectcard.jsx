/* eslint-disable react/prop-types */
import './App.css'
import hm1 from '../assets/images/Hm1.jpeg'
import hm2 from '../assets/images/Hm2.jpeg'
import hm3 from '../assets/images/Hm3.jpeg'
import hm4 from '../assets/images/Hm4.jpeg'


const ProjectCard = ({ title, imageSrc, technologies, description }) => {
  return (
    <div className="rounded-sm space-y-3">
      <img
        className="transition-transform ease-linear duration-300 transform hover:scale-110 rounded-sm"
        src={imageSrc}
        width={300}
        height={300}
        alt=""
      />
      <h1 className="font-semibold text-2xl">{title}</h1>
      <p className="text-emerald-600 line-clamp-1">{technologies}</p>
      <p className="text-left font-light line-clamp-2 max-w-xs">{description}</p>
      
    </div>
  );
};

const ProjectCardList = () => {
  const projects = [
    {
      imageSrc: hm1,
    },
    {
      imageSrc: hm2,
    },
    {
      imageSrc: hm3,
    },
    {
      imageSrc: hm4,
    },
    {
      imageSrc: hm2,
    },
    {
      imageSrc: hm2,
    },
  ];

  return (
    <div className="space-y-4 xl:mx-auto xl:my-auto">
      <div className="flex justify-center space-x-8">
        <p className="text-black rounded-sm font-bold text-2xl">Recent Activities</p>
      </div>
      <div className="grid xl:grid-cols-2 gap-8 overflow-y-scroll h-96 text-white p-8 bg-gray-600">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectCardList;
