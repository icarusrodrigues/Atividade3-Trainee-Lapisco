import { useState } from "react";
import styles from "./TypeButton.module.css";

function TypeButtons() {
    const [selectedId, setSelectedId] = useState(-1);

    function Select(i) {
        if (selectedId === i) {
            setSelectedId()
        } else {
            setSelectedId(i);
        }
    }

    return (
        <div className={styles.type}>
            <button className={0 === selectedId ? styles.selected_type : styles.item_type}
                onClick={() => Select(0)} >
                Fruta
            </button>
            <button className={1 === selectedId ? styles.selected_type : styles.item_type}
                onClick={() => Select(1)} >
                Verdura
            </button>
            <button className={2 === selectedId ? styles.selected_type : styles.item_type}
                onClick={() => Select(2)} >
                Carne
            </button>
            <button className={3 === selectedId ? styles.selected_type : styles.item_type}
                onClick={() => Select(3)} >
                Higiene
            </button>
            <button className={4 === selectedId ? styles.selected_type : styles.item_type}
                onClick={() => Select(4)} >
                Guloseimas
            </button>
            <button className={5 === selectedId ? styles.selected_type : styles.item_type}
                onClick={() => Select(5)} >
                Outro
            </button>
        </div>
    );

}

export default TypeButtons