import React, { ReactNode } from "react";

export interface HeadingProps {
  title: string;
}

export function Header({ title }: HeadingProps) {
  return <h1>{title}</h1>;
}

export function List<ListItem>({
  items,
  render,
}: {
  items: ListItem[];
  render: (item: ListItem) => ReactNode;
}) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{render(item)}</li>
      ))}
    </ul>
  );
}

function EvenMoreReactComponent() {
  return (
    <div>
      <Header title="React" />
      <List items={["a", "b", "c"]} render={(str) => <strong>{str}</strong>} />
    </div>
  );
}

export default EvenMoreReactComponent;
