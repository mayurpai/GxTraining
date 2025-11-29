import C from './C'

const B = (props) => {
    return (
        <div>Componnent B Calling <C name={props.name}></C></div>
    )
}

export default B
