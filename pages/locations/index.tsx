import React from "react";
import axios from "axios";

const Places: React.FC = ({ data }: any) => {
  return <div>locations</div>;
};

// export const getServerSideProps = async (context: any) => {
//   // const res = await fetch("https://rickandmortyapi.com/api/character");
//   // const response = await res.json();

//   try {
//     const result = await axios.get(
//       "https://jsonplaceholder.typicode.com/todos/1"
//     );
//     const data = result.data;
//     console.log(data);
//     return {
//       props: {
//         data: data,
//       },
//     };
//   } catch (error) {
//     console.log(error);
//   }
// };

export default Places;
