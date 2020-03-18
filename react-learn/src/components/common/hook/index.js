import React,{  useEffect} from 'react'
export default function Index(props) {
    let timer = null;
    const divRef = React.createRef();
    useEffect(()=>{
        const div = divRef.current;
        let num = 0; //次数
        const disY = props.top / 100;//移动的上下距离
        const disX = props.left / 100;//移动的左右距离
        timer = setInterval(() => {
            
            num ++;
            
            div.style.top = disY  * num+"px";
            div.style.left = disX * num+"px";
            if(num === 100){
                clearInterval(timer);
            }
        }, 10);
    });
    return (
        <div>
            <div ref = {divRef} style = {{
                width:100,
                height:100,
                backgroundColor:'#f40',
                position:"absolute",
                left:0,
                top:0
            }}>
                
            </div>
            <button>隐藏/显示</button>
        </div>
    )
}
