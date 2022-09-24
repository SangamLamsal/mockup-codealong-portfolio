import Image from "next/image";
import Link from "next/link";
import propertyImg from "../../public/assets/projects/property.jpg";
import netflixImg from "../../public/assets/projects/netflix.jpg";
import ProjectItems from "./ProjectsItem";

const Project = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItems
            title="Property Finder"
            backgroundImg={propertyImg}
            projectUrl="/Property/property"
          />
          <ProjectItems
            title="Property Finder"
            backgroundImg={netflixImg}
            projectUrl="/Property/netflix"
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
