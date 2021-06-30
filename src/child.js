function ChildComponent(props){
    const {name, age} = props;
    return <div>        
        <p>{name}</p>
        <p>{age}</p> 
        </div>
}

export default ChildComponent;