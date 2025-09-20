import React, { FC, FormEvent, useEffect, useRef } from 'react';
import { useForm, ValidationError } from "@formspree/react";
import { FIELD_TRANSLATIONS, FIELDS, FORM_ID } from "../consts";
import { InputField, Form, TextArea, FieldContainer, Label } from "./ContactForm.style";
import MenuButton from "Components/Menu Button/MenuButton";
import useTranslation from "shared/hooks/useTranslation";
import { ContactField } from "../types"; 

interface IContactForm {
    isDrawerOpen: boolean;
}

const ContactForm: FC<IContactForm> = ({ isDrawerOpen }) => {
    const [state, handleSubmit] = useForm(FORM_ID);
    const messageFieldRef = useRef<HTMLTextAreaElement>(null);
    const messageRef = useRef<string>("");
    const { translate, textDir } = useTranslation();
    
    const onSubmit = async (ev: FormEvent<HTMLFormElement>) => {
        if (!messageRef.current && messageFieldRef.current)
            messageFieldRef.current.value = translate(FIELD_TRANSLATIONS[ContactField.Message]);

        await handleSubmit(ev);
        ev.currentTarget.reset();
    }
    
    const onMessageChange = (ev: React.ChangeEvent) => {
        const target = ev.target as HTMLTextAreaElement;
        messageRef.current = target.value;
    }

    useEffect(() => {
        if (!isDrawerOpen && !messageRef.current && messageFieldRef.current)
            messageFieldRef.current.value = "";
        
    }, [isDrawerOpen]);
    
    return (
        <Form onSubmit={onSubmit}>
            {FIELDS.map(({
                name,
                label,
                autocomplete,
                maxLength,
                required,
                props
            }) => (
                <FieldContainer>
                    {!!label && <Label>{translate(label)}</Label>}
                    <InputField
                        id={name}
                        type={autocomplete || "text"}
                        name={name}
                        maxLength={maxLength}
                        required={required}
                        dir={textDir}
                        {...props}
                    />
                    <ValidationError
                        prefix={name}
                        field={name}
                        errors={state.errors}
                    />
                </FieldContainer>
            ))}
            <FieldContainer>
                <TextArea
                    ref={messageFieldRef}
                    id={"message"}
                    placeholder={translate(FIELD_TRANSLATIONS[ContactField.Message])}
                    name={"message"}
                    onChange={onMessageChange}
                    required={false}
                    maxLength={200}
                    dir={textDir}
                />
                <ValidationError
                    prefix={"Message"}
                    field={"message"}
                    errors={state.errors}
                />
            </FieldContainer>
            <MenuButton
                type={"submit"}
                text={translate(FIELD_TRANSLATIONS[ContactField.Submit])}
                disabled={state.submitting}
            />
        </Form>
    );
}

export default ContactForm;