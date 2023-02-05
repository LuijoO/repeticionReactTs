// aca estoy importando las definiciones de tipo y se lo estoy aplicando a la interfaz de Props
import { Sub } from "../types"

interface Props {
  // y aca lo uso para que el tipado sea el mismo
    subs: Array<Sub>
}


const List = ({subs}: Props) => {

    const renderList = (): JSX.Element[] => {
       return subs.map((sub) => {
            return (
              <li key={sub.nick}>
                <img src={sub.avatar} alt={`avatar for ${sub.nick}`} />
                <h4>
                  {sub.nick} (<small>{sub.subMonth}</small>)
                </h4>
                <p>{sub.description?.substring(0, 100)}</p>
              </li>
            );
          })
        }
    return(
  <ul>
   {renderList()}
  </ul>);
}

export default List
