import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import blogData from "@/data/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";

export const metadata: Metadata = {
  title: "Project Details | Research Lab",
  description: "Detailed information about our research projects",
};

export default function Page({ params }: { params: { id: string } }) {
  return <div>Dynamic Page: {params.id}</div>;
} 