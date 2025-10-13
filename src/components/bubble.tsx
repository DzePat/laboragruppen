import { LottiePlayer } from 'lottie-web';
import LottieAnimation from '../components/LottieAnimation';

interface props{
    color: string,
    title: string,
    animation: string
}

function Bubble(props: props){
    return(
        <div style={{display: "flex", width: "200px", height: "200px",backgroundColor: props.color,borderRadius: "50%"}}>
            <label className="flex items-center justify-center text-white w-2xl font-bold text-2xl p-1">{props.title}</label>
            {props.animation && (
                <LottieAnimation
                animationPath={props.animation}
                style={{
                backgroundcolor: "black",
                width: 400,
                height: 400,
          }}
        />)}
        </div>
    )
}

export default Bubble;