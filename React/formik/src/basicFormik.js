import { FormikConsumer, useFormik } from 'formik';
import * as Yup from 'yup';

const Form = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            amount: 0,
            currency: '',
            text: '',
            terms: false,
        },
        validationSchema: Yup.object({
            name: Yup.string().min(2, 'Minimum 2 simvola').required('Obyazatelnoe pole!'),
            email: Yup.string().email('Nepravilniy email address!').required('Obyazatelnoe pole!'),
            amount: Yup.number().min(5, 'Ne menee 5').max(1000).required('Obyazatelnoe pole!'),
            currency: Yup.string().required('Viberite valyutu'),
            text: Yup.string().min(10, "Ne menee 10 simvolov!").required(),
            terms: Yup.boolean().required('Neobxodimo soglasie!').oneOf([true], 'Neobxodimo soglasie!'),
        }),
        onSubmit: values => {
            console.log(JSON.stringify(values, null, 2));
        }
    });  

    return (
        <form className="form" onSubmit={formik.handleSubmit}>
            <h2>Отправить пожертвование</h2>
            <label htmlFor="name">Ваше имя</label>
            <input
                id="name"
                name="name"
                type="text"
                   // value={formik.values.name}
                // onChange={formik.handleChange}
                // // triggers when element loses Its focus
                // onBlur={formik.handleBlur}

                // Instead of writing those 3 lines above
                { ...formik.getFieldProps("name") }
            />
            {/* When name is interacted touched.name will be TRUE */}
            {formik.errors.name && formik.touched.name ? <div className="error">{formik.errors.name}</div> : null}
            <label htmlFor="email">Ваша почта</label>
            <input
                id="email"
                name="email"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            {formik.errors.email && formik.touched.email ? <div className="error">{formik.errors.email}</div> : null}
            <label htmlFor="amount">Количество</label>
            <input
                id="amount"
                name="amount"
                type="number"
                value={formik.values.amount}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            {formik.errors.amount && formik.touched.amount ? <div className="error">{formik.errors.amount}</div> : null}
            <label htmlFor="currency">Валюта</label>
            <select
                id="currency"
                name="currency"
                value={formik.values.currency}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                >
                    <option value="">Выберите валюту</option>
                    <option value="USD">USD</option>
                    <option value="UAH">UAH</option>
                    <option value="RUB">RUB</option>
            </select>
            {formik.errors.currency && formik.touched.currency ? <div className="error">{formik.errors.currency}</div> : null}
            <label htmlFor="text">Ваше сообщение</label>
            <textarea 
                id="text"
                name="text"
                value={formik.values.text}      
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            {formik.errors.text && formik.touched.text ? <div className="error">{formik.errors.text}</div> : null}
            <label className="checkbox">
                <input
                    name="terms"
                    type="checkbox"
                    value={formik.values.terms}      
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    />
                Соглашаетесь с политикой конфиденциальности?
            </label>
            {formik.errors.terms && formik.touched.terms ? <div className="error">{formik.errors.terms}</div> : null}
            <button type="submit">Отправить</button>
        </form>
    )
}

export default Form;