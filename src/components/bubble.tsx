import LottieAnimation from '../components/LottieAnimation';

interface props{
    color: string,
    title: string,
    animation: string
}

function Bubble(props: props){
    return(
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "200px", height: "200px",backgroundColor: props.color,borderRadius: "50%"}}>
            <label className="text-white font-bold text-2xl">{props.title}</label>
            {props.animation && (
                <LottieAnimation
                animationPath={props.animation}
                style={{
                left: 0,
                backgroundcolor: "black",
                width: 100,
                height: 100,
          }}
        />)}
        </div>
    )
}

export default Bubble;