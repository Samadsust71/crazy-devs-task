import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
} from "../ui/breadcrumb";

import CustomSeparator from "./CustomSeparator";

const AddFolder = () => {
  return (
    <Breadcrumb className="">
      <BreadcrumbList>
        <CustomSeparator />
        <BreadcrumbItem >
          <BreadcrumbLink className="cursor-pointer hover:text-text">Alfa</BreadcrumbLink>
        </BreadcrumbItem>
        <CustomSeparator />
        <BreadcrumbItem className="cursor-pointer">
          ...
        </BreadcrumbItem>
        <CustomSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink className="cursor-pointer hover:text-text">Beta</BreadcrumbLink>
        </BreadcrumbItem>
        <CustomSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage className="text-text cursor-default">
            Beta
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default AddFolder;
