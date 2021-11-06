import style from "../../styles/t_fx_comp.module.scss";

// export default function t_fx_card({ children }) {
//   return (
//     <>
//       <div className={style.comp_card}>{children}</div>
//       {/* <style jsx>{`
//         div {
//           padding: 1rem;
//         }
//       `}</style> */}
//     </>
//   );
// }

const t_fx_card = ({ children }) => {
  return (
    <>
      <div className={style.comp_card}>{children}</div>
    </>
  );
};

export default t_fx_card;
