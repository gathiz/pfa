import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { usePotStore } from '../../store/pot.store';

interface PotValues {
    name: string;
    amount: number;
    target: number;
    theme: string;
}

interface PotFormProps {
    pot: Partial<PotValues>,
    onSubmit: () => void;
}

const EditForm: React.FC<PotFormProps> = (props) => {

    const potStore = usePotStore();
    const ValidationSchema = Yup.object().shape({
        name: Yup.string()
            .required('Name is required'),
        target: Yup.number()
            .min(1, 'Target must be a number greater than 0')
            .required('Target is required'),
        theme: Yup.string()
            .matches(/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/, 'Invalid theme code')
            .required('Theme is required'),
    });

    const handleSubmit = (name: string, amount: number, target: number, theme: string) => {
        potStore.updateTotal(name, amount);
        potStore.updatePot(name, {target: target, theme: theme});
        props.onSubmit();
    }

    return (
            <Formik
                initialValues={{
                    name: props.pot.name || '',
                    target: props.pot.target || 0,
                    amount: 0,
                    theme: props.pot.theme  || ''
                }}
                validationSchema={ValidationSchema}
                onSubmit={(values: PotValues) => {
                    handleSubmit(values.name, values.amount, values.target, values.theme);
                }}>
                {({ isSubmitting }) => (
                    <Form className="w-full flex flex-col items-center justify-between bg-gray-100 border-2 border-gray-400">
                        <div className="flex flex-col w-full p-4 m-4">
                            <label htmlFor="name" className="block mx-4 text-gray-700 text-sm font-bold mb-2">
                                Pot Name
                            </label>
                            <Field
                                type="text"
                                disabled
                                name="name"
                                required
                                className="w-11/12 mx-4 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                            <ErrorMessage name="name" component="div" className="text-red-500 mx-4 text-sm mt-1" />
                        </div>
                        <div className="flex flex-col w-full p-4 m-4">
                            <label htmlFor="target" className="block mx-4 text-gray-700 text-sm font-bold mb-2">
                                Add Amount
                            </label>
                            <Field
                                type="number"
                                name="amount"
                                required
                                className="w-11/12 mx-4 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                            <ErrorMessage name="target" component="div" className="text-red-500 mx-4 text-sm mt-1" />
                        </div>
                        <div className="flex flex-col w-full p-4 m-4">
                            <label htmlFor="total" className="block mx-4 text-gray-700 text-sm font-bold mb-2">
                                Pot Total
                            </label>
                            <Field
                                type="number"
                                name="target"
                                required
                                className="w-11/12 mx-4 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                            <ErrorMessage name="target" component="div" className="text-red-500 mx-4 text-sm mt-1" />
                        </div>
                        <div className="flex flex-col w-full p-4 m-4">
                            <label htmlFor="theme" className="block mx-4 text-gray-700 text-sm font-bold mb-2">
                                Pot Theme
                            </label>
                            <Field
                                type="text"
                                name="theme"
                                required
                                className="w-11/12 mx-4 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                            <ErrorMessage name="theme" component="div" className="text-red-500 mx-4 text-sm mt-1" />
                        </div>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-11/12 mx-6 my-4 py-4 bg-gray-900 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                            Update Pot
                        </button>
                    </Form>
                )}
            </Formik>
    );
}

export default EditForm;