import InputLabel from "@/Components/InputLabel.jsx";
import TextInput from "@/Components/TextInput.jsx";
import { Textarea } from "@headlessui/react";
import { useForm, usePage } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton.jsx";

export function ResultsSection() {
    const { flash } = usePage().props;

    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        subject: "",
        test_score: "",
        exam_score: "",
        remark: "",
    });

    const submitForm = (e) => {
        e.preventDefault();

        post("/create-result", {
            onFinish: () =>
                reset(
                    "name",
                    "subject",
                    "test_score",
                    "exam_score",
                    "remark",
                ),
        });
    };
    return (
        <>
            <section id="results-section" className="tab-content">
                <section className="admin-section">
                    <h2>Results</h2>
                    <form onSubmit={submitForm} id="student-result-form">
                        <InputLabel htmlFor="name">
                            Name
                        </InputLabel>
                        <TextInput
                            type="text"
                            id="name"
                            name="name"
                            value={data.name}
                            onChange={(e) =>
                                setData("name", e.target.value)
                            }
                            required
                        />

                        <InputLabel htmlFor="subject">Subject</InputLabel>
                        <TextInput
                            type="text"
                            id="subject"
                            name="subject"
                            value={data.subject}
                            onChange={(e) => setData("subject", e.target.value)}
                            required
                        />


                        <InputLabel htmlFor="test_score">Test Score (30)</InputLabel>
                        <TextInput
                            type="number"
                            id="test_score"
                            name="test_score"
                            value={data.test_score}
                            onChange={(e) => setData("test_score", e.target.value)}
                            required
                        />

                        
                        <InputLabel htmlFor="exam_score">Exam Score (70)</InputLabel>
                        <TextInput
                            type="number"
                            id="exam_score"
                            name="exam_score"
                            value={data.exam_score}
                            onChange={(e) => setData("exam_score", e.target.value)}
                            required
                        />

                        <InputLabel htmlFor="remark">
                            Remark
                        </InputLabel>
                        <Textarea
                            type="text"
                            id="remark"
                            name="remark"
                            value={data.remark}
                            onChange={(e) => setData("remark", e.target.value)}
                            required
                        ></Textarea>

                        <PrimaryButton disabled={processing}>
                            Post Results
                        </PrimaryButton>
                    </form>
                </section>
            </section>
        </>
    );
}
