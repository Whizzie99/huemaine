"use client";
import React from "react";
import Image from "next/image";
import Moment from "react-moment";
import { urlFor } from "@/lib/sanityImageUrl";
import Container from "@/components/shared/Container/Container";
import {
  StyledWrapper,
  StyledContentImg,
  StyledDate,
  StyledContent,
  StyledAuthor,
  StyledSection,
  StyledTitle,
} from "./styles";
import BreadCrumb from "@/components/shared/BreadCrumb/BreadCrumb";

// import sample from "../../../../public/images/lifestyle.jpeg";
import { PortableText } from "@portabletext/react";

interface Props {
  title: string;
  img?: any;
  date: Date;
  content: any;
  author: string;
}

const SingleBlog: React.FC<Props> = ({ title, img, date, content, author }) => {
  const PortableTextComponent = {
    types: {
      image: ({ value }: { value: any }) => (
        <Image
          src={urlFor(value).url()}
          alt="Image"
          className="rounded-lg"
          width={800}
          height={800}
        />
      ),
    },
  };

  return (
    <StyledWrapper>
      <Container>
        <StyledSection>
          <BreadCrumb />
          <StyledTitle>{title}</StyledTitle>
          <StyledContentImg>
            <Image
              src={urlFor(img).url()}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
              priority
            />
          </StyledContentImg>
          <StyledDate>
            <Moment format="MMM Do YYYY">{date}</Moment>
          </StyledDate>
          <StyledContent>
            <PortableText value={content} components={PortableTextComponent} />
            <StyledAuthor>
              <span>posted by</span>
              <p>{author}</p>
            </StyledAuthor>
          </StyledContent>
        </StyledSection>
      </Container>
    </StyledWrapper>
  );
};

export default SingleBlog;
