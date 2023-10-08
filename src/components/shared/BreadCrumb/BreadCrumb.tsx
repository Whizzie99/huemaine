"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  StyledBreadcrumbNav,
  StyledBreadcrumbOl,
  StyledBreadcrumbItem,
  StyledSeparator,
} from "./styles";

const BreadCrumb = () => {
  const pathname = usePathname();

  const pathSections = pathname.split("/").filter(Boolean);

  const items = pathSections.map((section, index) => {
    const href = `/${pathSections.slice(0, index + 1).join("/")}`;

    return {
      label: section,
      href,
    };
  });

  return (
    <StyledBreadcrumbNav aria-label="breadcrumb">
      <StyledBreadcrumbOl>
        {items.map((item, index) => (
          <StyledBreadcrumbItem key={item.href}>
            <Link href={item.href}>{item.label}</Link>
            {index < items.length - 1 && <StyledSeparator>/</StyledSeparator>}
          </StyledBreadcrumbItem>
        ))}
      </StyledBreadcrumbOl>
    </StyledBreadcrumbNav>
  );
};

export default BreadCrumb;
