interface props{
    color: string,
    title: string
}

function Bubble(props: props){
    return(
        <div style={{display: "flex", width: "150px", height: "150px",backgroundColor: props.color,borderRadius: "50%"}}>
            <label className="flex items-center justify-center text-white w-2xl font-bold text-2xl p-1">{props.title}</label>
        </div>
    )
}

export default Bubble;