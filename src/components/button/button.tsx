import { MouseEventHandler } from "react"

type button = {

    value: String
    color: String
    backgroud: String
    border?:Boolean
    onClick?: any
  
  
}
export const Button = (props: button) => {

    return (
        <button style={{
            background: `${props.backgroud}`,
            padding: '7px 30px',
            border: `${props.border ? '1px solid #ccc' : 'none'}`,
            color: `${props.color}`,
            cursor: 'pointer',
            borderRadius: '3px'
        }}
            onClick={props.onClick}
        >

            {props.value}

        </button>
    )


}