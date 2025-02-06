import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { FaAws } from "react-icons/fa";

// Import Skill Icons
import { SiReact, SiTailwindcss, SiJavascript, SiPython, SiPostgresql, SiDocker, SiGithub, SiTerraform } from "react-icons/si";

const skills = [
  { name: "React", icon: <SiReact className="text-blue-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-300" /> },
  { name: "Python", icon: <SiPython className="text-blue-500" /> },
  { name: "AWS", icon: <FaAws className="text-orange-400" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-500" /> },
  { name: "Docker", icon: <SiDocker className="text-blue-400" /> },
  { name: "GitHub", icon: <SiGithub className="text-gray-400" /> },
  { name: "Terraform", icon: <SiTerraform className="text-purple-500" /> },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-yellow-400 mb-12">Skills</h2>

        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          modules={[Autoplay]}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
        >
          {skills.map((skill, index) => (
            <SwiperSlide key={index} className="flex flex-col items-center justify-center">
              <div className="p-6 bg-gray-900 rounded-xl shadow-lg hover:scale-110 transition-transform duration-300">
                <div className="text-6xl">{skill.icon}</div>
                <p className="mt-4 text-lg font-semibold">{skill.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
