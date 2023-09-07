import type { ReactNode } from 'react';

type IFooterIconListProps = {
  children: ReactNode;
};

const FooterIconList = (props: IFooterIconListProps) => (
  <div className="flex flex-wrap flex-col text-gray-500 hover:text-gray-700 fill-current w-5 h-5">
    {props.children}
  </div>
);

export { FooterIconList };