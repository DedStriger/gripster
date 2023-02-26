import { FormEvent, useCallback, useState, useRef } from 'react'
import styles from './PaymentPageView.module.scss'
import PaymetnPageSuccess from './PaymetnPageSuccess';
import PaymetnPageError from './PaymentPageError';
import { useSelector } from 'react-redux';
import { rootBasket } from '../../../service/basketReducer';

type Error = {
    place: 'email' | 'phone' | 'city' | 'secondName' | 'firstName' | 'fatherName' | 'house' | 'street' | 'apartment' | 'common';
    text: string;
} | undefined;

export enum PaymentState {
    Form,
    Success,
    Error
}

export default function PaymentPageView({isType}: {isType: PaymentState | undefined}){
    const [state, setState] = useState(isType || PaymentState.Form)
    const [error, setError] = useState<Error>(undefined)
    const basket = useSelector((store: {basket: rootBasket}) => store.basket)
    const formRef = useRef<HTMLFormElement>(null)
    const onSubmit = useCallback(async (e: FormEvent) => {
        setError(undefined)
        e.preventDefault();

        const info = new FormData(document.querySelector('.form') as HTMLFormElement)
        const email = info.get('email'),
        phone = info.get('phone'),
        sName = info.get('secondName'),
        fName = info.get('firstName'),
        fatName = info.get('fatherName'),
        city = info.get('city'),
        street = info.get('street'),
        house = info.get('house'),
        apartment = info.get('apartment');

        if(!email || !phone || !sName || !fName || !fatName || !city || !street || !house || !apartment){
            setError({place: 'common', text: 'Остались не заполненые поля!'})
            return;
        }

        if(!/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(email.toString())){
            setError({place: 'email', text: 'Введите корректный email адрес'})
            return;
        }

        if(!/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(phone.toString())){
            setError({place: 'phone', text: 'Введите корректный номер телефона'})
            return;
        }

        await fetch('https://gripster-pro.ru/tut/mail.php', {
            headers: {'Content-Type': 'application/json'},
            method: 'POST',
            body: JSON.stringify({
                email, phone, sName, fName, fatName, city, street, house, apartment, basket
            }),
        }).then(r => {
            if (r.ok) {
                setState(PaymentState.Success)
                return Promise.resolve();
              }
              return Promise.reject(r);
        })
        .catch(e => {
            setState(PaymentState.Error)
            console.log(e)
        })

    }, [basket])
    if(state === PaymentState.Success){
        return (<PaymetnPageSuccess/>)
    }

    if(state === PaymentState.Error){
        return (<PaymetnPageError/>)
    }
    return(
        <div className={styles.container}>
            <div className={styles.title}>Форма оплаты</div>
            {!!error && <div className={styles.error__text}>{error.text}</div>}
            <form className={styles.payment + ' form'} onSubmit={onSubmit} ref={formRef} data-form='true'>
                <div className={styles.row}>
                    <input type="text" name='email' className={error?.place === 'email' ? styles.error : ''} placeholder='Email' required />
                    <input type="tel" name='phone' className={error?.place === 'phone' ? styles.error : ''} placeholder='Номер телефона' required />
                </div>
                <div className={styles.row}>
                    <input type="text" name='secondName' className={error?.place === 'secondName' ? styles.error : ''} placeholder='Фамилия' required />
                    <input type="text" name='firstName' className={error?.place === 'firstName' ? styles.error : ''} placeholder='Имя' required />
                    <input type="text" name='fatherName' className={error?.place === 'fatherName' ? styles.error : ''} placeholder='Отчество' required />
                </div>
                <div className={styles.row}>
                    <input type="text" name='city' className={error?.place === 'city' ? styles.error : ''} placeholder='Город' required />
                    <input type="text" name='street' className={error?.place === 'street' ? styles.error : ''} placeholder='Улица' required />
                </div>
                <div className={styles.row}>
                    <input type="text" name='house' className={error?.place === 'house' ? styles.error : ''} placeholder='Дом' />
                    <input type="text" name='apartment' className={error?.place === 'apartment' ? styles.error : ''} placeholder='Квартира' required />
                </div>
                <button type='submit'>Создать заказ</button>
            </form>
        </div>
    )
}