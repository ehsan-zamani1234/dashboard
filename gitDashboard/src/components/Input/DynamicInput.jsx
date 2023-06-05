import React from 'react';
import styles from '../Input/Input.module.css'

const DynamicInput = () => {
    return (
        <div className={styles.container}>
            <lable className={styles.lableInput}>وضعیت</lable>
            <input className={styles.inputField} type='text'/>
        </div>
    );
};

export default DynamicInput;