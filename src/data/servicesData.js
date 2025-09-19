/* eslint-disable */
import { BsCodeSlash } from "react-icons/bs";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaBrain } from "react-icons/fa6";
import { BiServer } from "react-icons/bi";
import { AiOutlineShoppingCart, AiOutlineApi } from "react-icons/ai";
import { MdSpeed } from "react-icons/md";

export const servicesData = [
  {
    id: 1,
    title: 'Web Development',
    icon: <BsCodeSlash />
  },
  {
    id: 2,
    title: 'Backend Development',
    icon: <BiServer />
  },
  {
    id: 3,
    title: 'E-commerce Development',
    icon: <AiOutlineShoppingCart />
  },
  {
    id: 4,
    title: 'Website Optimization',
    icon: <MdSpeed />
  },
  {
    id: 5,
    title: 'API Integration',
    icon: <AiOutlineApi />
  },
  {
    id: 6,
    title: 'AI/ML Development',
    icon: <FaBrain />
  },
  {
    id: 7,
    title: 'Tutoring (Programming)',
    icon: <FaChalkboardTeacher />
  }
];
