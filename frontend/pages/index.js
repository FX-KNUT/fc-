import T_fx__expandable from "../components/Reusable/t_fx__expandable";

export default function Home() {
  const bq = (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
    </ul>
  );
  return (
    <main>
      main
      <T_fx__expandable _str_title="Expandable" _obj_blockquote={bq}>
        Excepteur nostrud labore nulla reprehenderit do ut. Do consequat aliqua
        et nisi adipisicing do cillum non adipisicing duis dolor tempor
        excepteur. Nisi deserunt dolore laborum nulla occaecat. Fugiat tempor
        fugiat qui pariatur.
      </T_fx__expandable>
    </main>
  );
}
