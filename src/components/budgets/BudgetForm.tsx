import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useBudgetStore } from '../../store/budget.store';

interface BudgetFormProps {
    onSubmit: () => void;
}

const BudgetForm: React.FC<BudgetFormProps> = ({onSubmit}) => {

    const budgetStore = useBudgetStore();
    const ValidationSchema = Yup.object().shape({
        category: Yup.string()
            .required('Name is required'),
        maximum: Yup.number()
            .min(1, 'Target must be a number greater than 0')
            .required('Target is required'),
        theme: Yup.string()
            .matches(/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/, 'Invalid theme code')
            .required('Theme is required'),
    });

    const initialValues = {
        category: '',
        maximum: 0,
        theme: ''
    };

    const handleSubmit = (category: string, maximum: number, theme: string) => {
        budgetStore.addBudget({ category: category, maximum: maximum, theme: theme });
        onSubmit();
    }

    return (
            <Formik
                initialValues={initialValues}
                validationSchema={ValidationSchema}
                onSubmit={(values,{setSubmitting,resetForm}) => {
                    handleSubmit(values.category, values.maximum, values.theme);
                    setSubmitting(false);
                    resetForm();
                }}>
                {({ isSubmitting }) => (
                    <Form className="w-full flex flex-col items-center justify-between bg-gray-100 border-2 border-gray-400">
                        <div className="flex flex-col w-full p-4 m-4">
                            <label htmlFor="category" className="block mx-4 text-gray-700 text-sm font-bold mb-2">
                                Budget Category
                            </label>
                            <Field
                                type="text"
                                name="category"
                                required
                                className="w-11/12 mx-4 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                            <ErrorMessage name="category" component="div" className="text-red-500 mx-4 text-sm mt-1" />
                        </div>
                        <div className="flex flex-col w-full p-4 m-4">
                            <label htmlFor="target" className="block mx-4 text-gray-700 text-sm font-bold mb-2">
                                Budget Maximum
                            </label>
                            <Field
                                type="number"
                                name="maximum"
                                required
                                className="w-11/12 mx-4 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                            <ErrorMessage name="target" component="div" className="text-red-500 mx-4 text-sm mt-1" />
                        </div>
                        <div className="flex flex-col w-full p-4 m-4">
                            <label htmlFor="theme" className="block mx-4 text-gray-700 text-sm font-bold mb-2">
                                Budget Theme
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
                            Add Budget
                        </button>
                    </Form>
                )}
            </Formik>
    );
}

export default BudgetForm;