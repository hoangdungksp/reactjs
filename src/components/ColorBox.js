import styles from './ColorBox.module.scss'
const ColorBox = (props) => {

    const styleInline = {
        backgroundColor: props.bgcolor
    }

    return (
        <div onClick={ props.clicked } className={styles.box} style={styleInline}>
            <h1>Box</h1>
        </div>
    )
}
export default ColorBox;