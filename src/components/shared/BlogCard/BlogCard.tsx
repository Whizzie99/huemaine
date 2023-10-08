"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Moment from "react-moment";
import { urlFor } from "@/lib/sanityImageUrl";
import { StyledCard, StyledImg, StyledTitle, StyledDate } from "./styles";

// import sample from "../../../../public/images/stun-pose-1.jpeg";

interface Props {
  title: string;
  img: any;
  date: Date;
  slug: string;
  id: string;
}

const BlogCard: React.FC<Props> = ({ title, img, date, slug, id }) => {
  const router = useRouter();

  const handleRouting = (id: string, slug: string): void => {
    return router.push(`/blog/${slug}/${id}`);
  };

  return (
    <StyledCard onClick={() => handleRouting(id, slug)}>
      <StyledImg>
        <Image
          src={urlFor(img).url()}
          alt="sample"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          priority
        />
      </StyledImg>
      <StyledDate>
        <Moment format="MMM Do YYYY">{date}</Moment>
      </StyledDate>
      <StyledTitle>{title}</StyledTitle>
    </StyledCard>
  );
};

export default BlogCard;
