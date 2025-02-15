import { cn } from "../../lib/utils";

// FooterSection.tsx
interface FooterSectionProps {
    data: { href?: string; title: string }[]; // Data should be an array of objects with 'href' and 'title'
    title: string; // Title of the section
    className?: string; // className is optional
  }
  
  const FooterSection: React.FC<FooterSectionProps> = ({ data = [], title = '', className = '' }) => {
    return (
      <div className={cn("xl:mx-auto", className)}>
        <div className="flex flex-col gap-3">
          <p className="text-lg font-medium lg:text-xl">{title}</p>
          <div className="flex flex-col gap-3 mt-2 md:mt-4 sm:mt-3">
            {data.map((item, key) => (
              <a href={item.href} className="md:text-sm text-[12px] font-normal" key={key}>
                {item?.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default FooterSection;
  