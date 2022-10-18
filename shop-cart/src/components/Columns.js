import React from "react";
import styles from "./Columns.module.css";

function Columns() {

    const [frutas, setFrutas] = React.useState([]);
    const [verduras, setVerduras] = React.useState([]);
    const [carnes, setCarnes] = React.useState([]);
    const [higienes, setHigienes] = React.useState([]);
    const [guloseimas, setGuloseimas] = React.useState([]);
    const [outros, setOutros] = React.useState([]);

    const [idFruta, setIdFruta] = React.useState(0);
    const [idVerdura, setIdVerdura] = React.useState(0);
    const [idCarne, setIdCarne] = React.useState(0);
    const [idHigiene, setIdHigiene] = React.useState(0);
    const [idGuloseima, setIdGuloseima] = React.useState(0);
    const [idOutro, setIdOutro] = React.useState(0);

    function RemoveButton(props) {
        let type = props.type;

        if (type === "Fruta") {
            setFrutas(frutas.filter((fruta) => fruta !== frutas[props.id]));
        } else if (type === "Verdura") {
            setVerduras(verduras.filter((verdura) => verdura.props.id !== props.id));
        } else if (type === "Carne") {
            setCarnes(carnes.filter((carne) => carne.props.id !== props.id));
        } else if (type === "Higiene") {
            setHigienes(higienes.filter((higiene) => higiene.props.id !== props.id));
        } else if (type === "Guloseimas") {
            setGuloseimas(guloseimas.filter((guloseima) => guloseima.props.id !== props.id));
        } else {
            setOutros(outros.filter((outro) => outro.props.id !== props.id));
        }
    }

    function Product(props) {
        const name = props.name;
        const price = props.price;

        return (
            <div className={styles.item}>
                <h6 className={styles.item_name}>{name}</h6>
                <div className={styles.item_price}>R${price}</div>
                <button className={styles.remove_btn} onClick={() => RemoveButton(props)}>❌</button>
            </div>
        );
    }


    function AddItem() {
        try {
            let name = document.getElementById("item_name").value;
            let type = document.querySelector(".TypeButton_selected_type__SOrne").textContent;
            let price = document.getElementById("item_price").value;

            if (name === "" || price === "") {
                throw new alert("Preencha os campos!");
            }

            if (type === "Fruta") {
                setFrutas(frutas.concat(<Product key={frutas.length} id={idFruta} type={type} name={name} price={price} />));
                setIdFruta(idFruta + 1);
            } else if (type === "Verdura") {
                setVerduras(verduras.concat(<Product key={verduras.length} id={idVerdura} type={type} name={name} price={price} />));
                setIdVerdura(idVerdura + 1);
            } else if (type === "Carne") {
                setCarnes(carnes.concat(<Product key={carnes.length} id={idCarne} type={type} name={name} price={price} />));
                setIdCarne(idCarne + 1);
            } else if (type === "Higiene") {
                setHigienes(higienes.concat(<Product key={higienes.length} id={idHigiene} type={type} name={name} price={price} />));
                setIdHigiene(idHigiene + 1);
            } else if (type === "Guloseimas") {
                setGuloseimas(guloseimas.concat(<Product key={guloseimas.length} id={idGuloseima} type={type} name={name} price={price} />));
                setIdGuloseima(idGuloseima + 1);
            } else {
                setOutros(outros.concat(<Product key={outros.length} id={idOutro} type={type} name={name} price={price} />));
                setIdOutro(idOutro + 1);
            }
        } catch {
            alert("Preencha os campos!");
        }
    }

    return (
        <>
            <button className={styles.add_item} onClick={() => AddItem()}> Adicionar item</button>

            <div className={styles.final}>
                <div className={styles.final_cart}>
                    <h2>Fruta</h2>
                    {frutas}
                </div>
                <div className={styles.final_cart}>
                    <h2>Verdura</h2>
                    {verduras}
                </div>
                <div className={styles.final_cart}>
                    <h2>Carne</h2>
                    {carnes}
                </div>
                <div className={styles.final_cart}>
                    <h2>Higiene</h2>
                    {higienes}
                </div>
                <div className={styles.final_cart}>
                    <h2>Guloseimas</h2>
                    {guloseimas}
                </div>
                <div className={styles.final_cart}>
                    <h2>Outro</h2>
                    {outros}
                </div>
            </div>

        </>
    );
}


export default Columns;