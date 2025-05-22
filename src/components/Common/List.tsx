import React from 'react';

interface ListProps {
  children: React.ReactNode;
}

const List: React.FC<ListProps> = ({ children }) => {
  return <ul className="list-disc pl-5">{children}</ul>;
};

export default List; 