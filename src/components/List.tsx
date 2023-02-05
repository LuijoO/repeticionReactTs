interface Props {
    subs: Array<{
        nick: string
        avatar: string
        subMonth: number
        description?: string
    }>
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
