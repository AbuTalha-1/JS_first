import './New_dy.css'
function New_dy( props){
   
    return (
        <div>
            <h2 className="dynamic_part">
               Hey,there my name is
                <p>{props.name}</p>
                <p> Department of  {props.Department} and i am </p>
                <p>{props.Age} years Old</p>
            </h2>
        </div>
    )
}
export default New_dy