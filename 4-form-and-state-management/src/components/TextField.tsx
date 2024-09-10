import React from 'react';
import styles from "@/styles/textfield.module.css";


interface TextFieldProps {
    id: string;
    label: string;
    required?: boolean;
    placeholder?: string;
    type: "text" | "password" | "email";
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function TextField(props: TextFieldProps) {
  return (
        <label htmlFor={props.id}>
            <div className={styles.labelText}>
                {props.label}
                {props.required && <span style={{color:"red"}}>*</span>}
            </div>
            <input 
                className={styles.input}
                id={props.id}
                type={props.type}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
                required={props.required}
            />
        </label>
    
  );
}