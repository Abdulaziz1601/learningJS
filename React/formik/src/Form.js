import { Formik, Form, Field, ErrorMessage, useField } from 'formik';
import * as Yup from 'yup';
// Optimization when we have a lot of same inputs
const MyTextInput = ({label, ...props}) => {

    // Hook useField will attach our input/label to our Formik component with the help of Context to include such props like onSubmit, onChange, onBlur and etc.
    const [field, meta] = useField(props);
    return (
        <>
            <label htmlFor={props.name}>{ label }</label>
            <input {...props} {...field} />
            {meta.touched && meta.error ? (
                <div className='error'>{meta.error}</div>
            ) : null}
        </>
    )
};

const MyCheckBox = ({children, ...props}) => {
    const [field, meta] = useField({...props, type: 'checkbox' });
    return (
        <>
            <label className='checkbox'>
                <input type="checkbox" {...props} {...field} />
                {children}
            </label>

            {meta.touched && meta.error ? (
                <div className='error'>{meta.error}</div>
            ) : null}
        </>
    )
};

const CustomForm = () => {

    return (
        <Formik
            initialValues = {{
                name: '',
                email: '',
                amount: 0,
                currency: '',
                text: '',
                terms: false,
            }}

            validationSchema = {Yup.object({
                name: Yup.string()
                        .min(2, 'Minimum 2 simvola')
                        .required('Obyazatelnoe pole!'),
                email: Yup.string()
                        .email('Nepravilniy email address!')
                        .required('Obyazatelnoe pole!'),
                amount: Yup.number()
                        .min(5, 'Ne menee 5')
                        .max(1000)
                        .required('Obyazatelnoe pole!'),
                currency: Yup.string()
                        .required('Viberite valyutu'),
                text: Yup.string()
                        .min(10, "Ne menee 10 simvolov!")
                        .required(),
                terms: Yup.boolean()
                        .required('Neobxodimo soglasie!')
                        .oneOf([true], 'Neobxodimo soglasie!'),
            })}

            onSubmit = {values => console.log(JSON.stringify(values, null, 2))}
        >
            <Form className="form" >
                <h2>Отправить пожертвование</h2>
                {/* <label htmlFor="name">Ваше имя</label>
                <Field
                    id="name"
                    name="name"
                    type="text"
                />
                <ErrorMessage className="error" name="name" component="div"/>*/}
                {/* Instead of those three components we will write only one below */}
                <MyTextInput 
                    label={"Ваше имя"}
                    id="name"
                    name="name"
                    type="text"
                />
                <MyTextInput 
                    label="Ваша почта"
                    id="email"
                    name="email"
                    type="email"
                />        
                <label htmlFor="amount">Количество</label>
                <Field
                    id="amount"
                    name="amount"
                    type="number"
                />
                <ErrorMessage className="error" name="amount" component="div"/>                
                <label htmlFor="currency">Валюта</label>
                <Field
                    id="currency"
                    name="currency"
                    as="select">
                        <option value="">Выберите валюту</option>
                        <option value="USD">USD</option>
                        <option value="UAH">UAH</option>
                        <option value="RUB">RUB</option>
                </Field>
                <ErrorMessage className="error" name="currency" component="div"/>                
                <label htmlFor="text">Ваше сообщение</label>
                <Field 
                    id="text"
                    name="text"
                    as="textarea"/>
                <ErrorMessage className="error" name="text" component="div"/>                
                {/* <label className="checkbox">
                    <Field
                        name="terms"
                        type="checkbox" />
                    Соглашаетесь с политикой конфиденциальности?
                </label>
                <ErrorMessage className="error" name="terms" component="div"/>                 */}
                <MyCheckBox 
                    name="terms">
                        Соглашаетесь с политикой конфиденциальности?
                </MyCheckBox>
                <button type="submit">Отправить</button>
            </Form>
        </Formik>
    )
}

export default CustomForm;